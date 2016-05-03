// Copyright (c) 2016 ZBox, Spa. All Rights Reserved.
// See LICENSE.txt for license information.

export default class Error {
  constructor(err) {
    this.code = err.Fault ? err.Fault.Code.Value : err.status;
    this.extra = this.getErrorInfo(err);
  }

  getErrorInfo(err) {
    if (err && err.Fault) {
      return {
        'code': err.Fault.Detail.Error.Code,
        'reason': err.Fault.Reason.Text,
        'trace': err.Fault.Detail.Error.Trace
      };
    } else {
      return { 'code': err.status, 'reason': err.statusText };
    }
  }
}
