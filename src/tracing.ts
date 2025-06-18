// import { NodeSDK } from '@opentelemetry/sdk-node';
// import { ConsoleSpanExporter } from '@opentelemetry/sdk-trace-node';
// import { getNodeAutoInstrumentations } from '@opentelemetry/auto-instrumentations-node';
// import {
//   PeriodicExportingMetricReader,
//   ConsoleMetricExporter,
// } from '@opentelemetry/sdk-metrics';

// const sdk = new NodeSDK({
//   traceExporter: new ConsoleSpanExporter(),
//   metricReader: new PeriodicExportingMetricReader({
//     exporter: new ConsoleMetricExporter(),
//   }),
//   instrumentations: [getNodeAutoInstrumentations()],
// });

// /*instrumentation.ts*/
// import { NodeSDK } from '@opentelemetry/sdk-node';
// import { ConsoleSpanExporter } from '@opentelemetry/sdk-trace-node';
// import {
//   PeriodicExportingMetricReader,
//   ConsoleMetricExporter,
// } from '@opentelemetry/sdk-metrics';
// import { resourceFromAttributes } from '@opentelemetry/resources';
// import {
//   ATTR_SERVICE_NAME,
//   ATTR_SERVICE_VERSION,
// } from '@opentelemetry/semantic-conventions';

// const sdk = new NodeSDK({
//   resource: resourceFromAttributes({
//     [ATTR_SERVICE_NAME]: 'nestjs-otel',
//     [ATTR_SERVICE_VERSION]: '1.0',
//   }),
//   traceExporter: new ConsoleSpanExporter(),
//   metricReader: new PeriodicExportingMetricReader({
//     exporter: new ConsoleMetricExporter(),
//   }),
// });

import { ExpressInstrumentation } from '@opentelemetry/instrumentation-express';
import { HttpInstrumentation } from '@opentelemetry/instrumentation-http';
import { NestInstrumentation } from '@opentelemetry/instrumentation-nestjs-core';
import { PgInstrumentation } from '@opentelemetry/instrumentation-pg';
import { resourceFromAttributes } from '@opentelemetry/resources';
import {
  ConsoleMetricExporter,
  PeriodicExportingMetricReader,
} from '@opentelemetry/sdk-metrics';
import { NodeSDK } from '@opentelemetry/sdk-node';
import { ConsoleSpanExporter } from '@opentelemetry/sdk-trace-node';
import {
  ATTR_SERVICE_NAME,
  ATTR_SERVICE_VERSION,
} from '@opentelemetry/semantic-conventions';

const sdk = new NodeSDK({
  resource: resourceFromAttributes({
    [ATTR_SERVICE_NAME]: 'nestjs-otel',
    [ATTR_SERVICE_VERSION]: '1.0',
  }),
  traceExporter: new ConsoleSpanExporter(),
  metricReader: new PeriodicExportingMetricReader({
    exporter: new ConsoleMetricExporter(),
  }),
  instrumentations: [
    // getNodeAutoInstrumentations(),
    new HttpInstrumentation(),
    new ExpressInstrumentation(),
    new NestInstrumentation(),
    new PgInstrumentation(),
  ],
});

export const initalizeTracing = () => sdk.start();
