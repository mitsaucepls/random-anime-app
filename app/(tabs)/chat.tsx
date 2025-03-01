/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState, useEffect, useCallback } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { pipeline, PipelineType } from '@fugood/transformers';
import InlineSection from '@/components/form/InlineSection';
import Section from '@/components/form/Section';
import SelectField from '@/components/form/SelectField';
import Progress from '@/components/Progress';
import Models from '@/components/models';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';
import { ThemedText } from '@/components/ThemedText';

export default function App(): React.JSX.Element {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';
  const backgroundColor = Colors[colorScheme ?? 'light'].background;

  const [task, setTask] = useState<string | null>(null);
  const [settings, setSettings] = useState<object>({});
  const [params, setParams] = useState<object | null>(null);
  const [download, setDownload] = useState<object>({});
  const [isLoading, setLoading] = useState<boolean>(false);

  const backgroundStyle = { backgroundColor };

  useEffect(() => {
    setDownload({});
    setLoading(false);
  }, [task]);

  const onProgress  = useCallback((event: any) => {
    if (event?.file) {
      const { file, status, progress } = event;
      setLoading(true);
      setDownload((prev) => ({
        ...prev,
        [file]: { status, progress },
      }));
    }
    if (event?.status === 'ready') {
      setLoading(false);
    }
  }, []);

  const run = useCallback(async (useTask: PipelineType, model: string, modelOpt: object, ...args: any[]) => {
    if (!task || !useTask || !args?.length) return;
    let pipe;
    try {
      pipe = await pipeline(useTask, model, { ...modelOpt, progress_callback: onProgress });
      const result = await pipe._call(...args);
      await pipe.dispose();
      return result;
    } catch (e) {
      console.error(e.stack);
      await pipe?.dispose();
      throw e;
    }
  }, [task, onProgress]);

  const SettingsComponent = Models[task]?.Settings;
  const ParametersComponent = Models[task]?.Parameters;
  const InteractComponent = Models[task]?.Interact;

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View style={styles.container}>
          <ThemedText type='title'># transformers.js</ThemedText>
          <InlineSection title="Task">
            <SelectField
              options={Object.entries(Models).map(([key, value]) => ({
                label: value.title,
                value: key,
              }))}
              value={task}
              onChange={(value) => setTask(value)}
              placeholder="Select a task"
            />
          </InlineSection>
          <InlineSection title="Settings">
            {SettingsComponent ? (
              <SettingsComponent onChange={setSettings} />
            ) : (
              <ThemedText>Select task first</ThemedText>
            )}
          </InlineSection>
          <InlineSection title="Parameters">
            {ParametersComponent ? (
              <ParametersComponent onChange={setParams} />
            ) : (
              <ThemedText>N/A</ThemedText>
            )}
          </InlineSection>
          <Section title="Interact">
            {InteractComponent ? (
              <InteractComponent settings={settings} params={params} runPipe={run} />
            ) : (
              <ThemedText>N/A</ThemedText>
            )}
          </Section>
          {isLoading && (
            <Section title="Progress">
              {Object.entries(download).map(([key, { progress, status }]) => (
                <Progress key={key} title={key} value={progress} status={status} />
              ))}
            </Section>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 80,
  },
});
