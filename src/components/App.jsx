import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [value, setValue] = React.useState([]);
  const [element, setElement] = React.useState({
    title: "",
    content: ""
  });
  // to Create a new Note
  function CreateNote(myValue, index) {
    return (
      <Note
        Id={index}
        key={index}
        title={myValue.title}
        content={myValue.content}
        deleteItem={DeleteNote}
      />
    );
  }
  // to delete a Note
  function DeleteNote(event) {
    const itemIndex = Number(event.target.value);
    setValue((prevalue) => {
      return prevalue.filter((element, index) => {
        return itemIndex !== index;
      });
    });
  }
  // to add element to the state hook object before adding to the array
  function addElement(event) {
    const { name, value } = event.target;
    setElement((preValue) => {
      return {
        ...preValue,
        [name]: value
      };
    });
  }
  // to add note to the state hook Array when submitted
  function submitElement(event) {
    setValue((prevalue) => {
      return [...prevalue, element];
    });
    setElement({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <Header />
      <CreateArea submitElement={submitElement} valueChange={addElement} />
      {value.map(CreateNote)}
      <Footer />
    </div>
  );
}

export default App;
