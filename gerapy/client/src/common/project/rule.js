export const ruleItemOptions = [
  {
    value: 'allow',
    label: 'allow'
  }, {
    value: 'deny',
    label: 'deny'
  }, {
    value: 'allow_domains',
    label: 'allow_domains'
  }, {
    value: 'deny_domains',
    label: 'deny_domains'
  }, {
    value: 'deny_extensions',
    label: 'deny_extensions'
  }, {
    value: 'restrict_xpaths',
    label: 'restrict_xpaths'
  }, {
    value: 'restrict_css',
    label: 'restrict_css'
  }, {
    value: 'follow',
    label: 'follow'
  }, {
    value: 'callback',
    label: 'callback'
  }, {
    value: 'method',
    label: 'method'
  }, {
    value: 'data',
    label: 'data'
  }, {
    value: 'params',
    label: 'params'
  }, {
    value: 'priority',
    label: 'priority'
  }, {
    value: 'dont_filter',
    label: 'dont_filter'
  }, {
    value: 'meta',
    label: 'meta'
  }, {
    value: 'cb_kwargs',
    label: 'cb_kwargs'
  }, {
    value: 'proxy',
    label: 'proxy'
  }, {
    value: 'render',
    label: 'render'
  }, {
    value: 'dont_redirect',
    label: 'dont_redirect'
  }, {
    value: 'dont_retry',
    label: 'dont_retry'
  }, {
    value: 'handle_httpstatus_list',
    label: 'handle_httpstatus_list'
  }, {
    value: 'handle_httpstatus_all',
    label: 'handle_httpstatus_all'
  }, {
    value: 'dont_cache',
    label: 'dont_cache'
  }, {
    value: 'dont_obey_robotstxt',
    label: 'dont_obey_robotstxt'
  }, {
    value: 'download_timeout',
    label: 'download_timeout'
  }, {
    value: 'max_retry_times',
    label: 'max_retry_times'
  }, {
    value: 'tags',
    label: 'tags'
  }, {
    value: 'attrs',
    label: 'attrs'
  }, {
    value: 'canonicalize',
    label: 'canonicalize'
  }, {
    value: 'unique',
    label: 'unique'
  }, {
    value: 'strip',
    label: 'strip'
  }, {
    value: 'process_value',
    label: 'process_value'
  }, {
    value: 'process_links',
    label: 'process_links'
  }, {
    value: 'process_request',
    label: 'process_request'
  },
];

export const ruleItemInit = {
  allow: [],
  deny: [],
  allow_domains: [],
  deny_domains: [],
  deny_extensions: [],
  restrict_xpaths: [],
  restrict_css: [],
  follow: false,
  callback: '',
  method: '',
  data: '',
  params: '',
  priority: '',
  dont_filter: false,
  meta: '',
  cb_kwargs: '',
  proxy: '',
  render: false,
  dont_redirect: false,
  dont_retry: false,
  handle_httpstatus_list: [],
  handle_httpstatus_all: false,
  dont_cache: false,
  dont_obey_robotstxt: false,
  download_timeout: '',
  max_retry_times: '',
  tags: [],
  attrs: [],
  canonicalize: false,
  unique: false,
  strip: false,
  process_value: '',
  process_links: '',
  process_request: '',
}
