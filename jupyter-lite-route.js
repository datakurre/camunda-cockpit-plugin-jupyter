function ___$insertStyle(css) {
  if (!css) {
    return;
  }
  if (typeof window === 'undefined') {
    return;
  }

  var style = document.createElement('style');

  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  document.head.appendChild(style);
  return css;
}

var jupyterLiteRoute = [
    {
        id: 'jupyterLiteNavigation',
        pluginPoint: 'cockpit.navigation',
        properties: {
            pagePath: '#/jupyter',
            label: 'Jupyter Lite',
            priority: 1,
            checkActive: function (path) {
                return path.indexOf('#/jupyter') > -1;
            },
        }
    },
    {
        id: 'jupyterLiteRoute',
        pluginPoint: 'cockpit.route',
        properties: {
            path: '/jupyter',
            label: '/jupyter',
        },
        render: function (node, _a) {
            var api = _a.api;
            var iframe = document.createElement('iframe');
            iframe.src = '../scripts/jupyter';
            iframe.style.setProperty('position', 'absolute');
            iframe.style.setProperty('top', '0px');
            iframe.style.setProperty('right', '0px');
            iframe.style.setProperty('bottom', '0px');
            iframe.style.setProperty('left', '0px');
            iframe.style.setProperty('width', '100%');
            iframe.style.setProperty('height', '100%');
            iframe.setAttribute('frameBorder', '0');
            iframe.setAttribute('width', '100%');
            iframe.setAttribute('height', '100%');
            node.appendChild(iframe);
            window.addEventListener("message", function (ev) {
                var _a, _b;
                if ((_a = iframe.contentWindow) === null || _a === void 0 ? void 0 : _a.location.toString().startsWith(ev.origin)) {
                    (_b = iframe.contentWindow) === null || _b === void 0 ? void 0 : _b.postMessage(api, ev.origin);
                }
            });
        },
    },
];

export default jupyterLiteRoute;
