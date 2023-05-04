import { useEffect, useState } from "react";
import Editor from "../components/Ckeditor";
export default function Post() {
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [data, setData] = useState("");
  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  return (
    <div>
      <Editor
        name="description"
        onChange={(data) => {
          setData(data);
        }}
        editorLoaded={editorLoaded}
      />
    </div>
  );
}
