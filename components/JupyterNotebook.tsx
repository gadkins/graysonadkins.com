// components/Notebook.js
import { JupyterNotebookViewer } from "react-jupyter-notebook-viewer";

function JupyterNotebook(props) {
    const notebook = new JupyterNotebookViewer(props);
    return <>{notebook}</>;
}

export default JupyterNotebook;