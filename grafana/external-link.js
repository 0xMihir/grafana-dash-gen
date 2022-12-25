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

function ExternalLink(opts) {
  opts = opts || {};

  const defaults = {
    title: "",
    tooltip: "",
    url: "",
    ...opts,
    tags: [],
    icon: "external link",
    targetBlank: true,
    type: "link",
    includeVars: false,
    keepTime: false,
  };
  this.state = defaults;
}

ExternalLink.prototype.generate = function generate() {
  if (this.state.title === "") {
    throw new SyntaxError("a title for the link must be provided")
  }
  if (this.state.url === "") {
    throw new SyntaxError("a url for the link must be provided")
  }
  return this.state;
};

ExternalLink.prototype.includeVariableValues = function includeVariableValues() {
  this.state.includeVars = true;
  return this
};

ExternalLink.prototype.includeTimeFilter = function includeTimeFilter() {
  this.state.keepTime = true;
  return this
};

ExternalLink.prototype.withIcon = function withIcon(iconName) {
  this.state.icon = iconName;
  return this
};

export default ExternalLink;
