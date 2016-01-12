---
title: Scheduled Backups with Heroku PGBackups
tags: git
template: /base.jade
category: snippet
---

Heroku provides free daily backups on _all_ database plans (even the free hobby plans, at the time of this writing). To take advantage of this, you still need to schedule your backups.

### Configuring

The backups will be run every day at the hour you specify. To configure the backups, use the `pg:backups schedule` command:

```
heroku pg:backups schedule DATABASE_URL --at '03:00 America/New_York' -a app-name
```

Note that the hour is required, but the timezone is simply recommended.

Also note the parameter passed to the schedule command: `DATABASE_URL`. This is the name of the environment variable on the Heroku instance that contains the database URL string. Substitute that name if you need to point to another database.

### Reviewing

You can view the currently scheduled backups by the `pg:backups schedules` command:

```
heroku pg:backups schedules -a app-name
```

The output looks something like this:

```
=== Backup Schedules
DATABASE_URL: daily at 3:00 (America/New_York)
```

### Unscheduling

To unschedule a scheduled daily backup, use the `pg:backups unschedule` command:

```
heroku pg:backups unschedule DATABASE_URL -a app-name
 ```

More details can be found in the [Heroku PGBackups documentation](https://devcenter.heroku.com/articles/heroku-postgres-backups#scheduling-backups).
