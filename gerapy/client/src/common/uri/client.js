exports.index = '/api/client'
exports.show = '/api/client/:id'
exports.update = '/api/client/:id/update'
exports.remove = '/api/client/:id/remove'
exports.create = '/api/client/create'
exports.projects = '/api/client/:id/projects'
exports.listSpiders = '/api/client/:id/project/:project/spiders'
exports.startSpider = '/api/client/:id/project/:project/spider/:spider'
exports.listJobs = '/api/client/:id/project/:project/jobs'
exports.getLog = '/api/client/:id/project/:project/spider/:spider/job/:job/log/:random'
exports.cancelJob = '/api/client/:id/project/:project/job/:job/cancel'
exports.projectVersions = '/api/client/:id/project/:name/versions'
exports.projectDeploy = '/api/client/:id/project/:name/deploy'
