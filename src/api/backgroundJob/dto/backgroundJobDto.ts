import { JobDto } from "./jobDto";

/*tsModel3*/
export class BackgroundJobDto {
  id: string;
  cron: string;
  queue: string;
  job: JobDto;
  loadException: string;
  nextExecution: string;
  lastJobId: string;
  lastJobState: string;
  lastExecution: string;
  createdAt: string;
  removed: boolean;
  timeZoneId: string;
  error: string;
  retryAttempt: number;
}


export class ScheduledJobDto {
  id: string;
  queue: string;
  job: JobDto;
  enqueueAt: string;
  scheduledAt: string;
  deletedAt: string;
  state: string;
  status: string;
  reason: string;
  exceptionInfo: string;
  result: string;
  totalDuration: number;
  finishedAt: string;
  serverId: string;
  startedAt: string;
}


