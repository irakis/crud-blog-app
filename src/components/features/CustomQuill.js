import ReactQuill from "react-quill";

export class CustomQuill extends ReactQuill {
    destroyEditor() {
      if (!this.editor) return;
      this.unhookEditor(this.editor);
    }
  
    instantiateEditor() {
      if(this.editor) {
        this.hookEditor(this.editor);
      }
      super.instantiateEditor();
    }
  }