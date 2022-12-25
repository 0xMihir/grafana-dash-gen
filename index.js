// Copyright (c) 2015 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

import Dashboard from './grafana/dashboard.js';
import Row from './grafana/row.js';
import ExternalLink from './grafana/external-link.js'
import Target from './grafana/target.js';
import Panels from './grafana/panels/index.js';
import Alert from './grafana/alert/alert.js';
import Condition from './grafana/alert/condition.js';
import Templates from './grafana/templates/index.js';
import publish from './grafana/publish.js';
import generateGraphId from './grafana/id.js';
import config from './grafana/config.js'
import Annotations from './grafana/annotations/index.js';

const configure = config.configure;

export default {
    Dashboard,
    Row,
    ExternalLink,
    Panels,
    Templates,
    Alert,
    Condition,
    Annotations,
    Target,
    publish,
    generateGraphId,
    configure
};
