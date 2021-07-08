import Home from "./pages/Home";
import About from "./pages/About";

function renderPath(path: string) {
  switch (path) {
    case '/':
      return new Home();
    case '/about':
      return new About();
  }
}

export function replaceRoute(path: string, state?: any) {
  const appDiv = document.getElementById('app');
  appDiv.innerHTML = '';

  window.history.replaceState(state, path, `${window.location.origin}${path}`);

  appDiv.appendChild(renderPath(path));
}