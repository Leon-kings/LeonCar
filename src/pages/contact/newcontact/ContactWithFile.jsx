import  { useRef } from "react"

const Form = () => {
  // create a Ref to access our form element
  const formRef = useRef(null)

  const sendFormData = async (event) => {
    // this will prevent your form to redirect to another page.
    event.preventDefault();

    if(!formRef.current){
      console.log('something wrong with form ref')
      return
    }

    // get our form data
    const formData = new FormData(formRef.current)

    // add some additional data if you want
    // formData.append('language', window.navigator.language)

    fetch('https://formcarry.com/s/{Your-Unique-Endpoint}', {
      method: 'POST',
      body: formData,
      headers: {
				// you don't have to set Content-Type
				// otherwise it won't work due to boundary!
        Accept: 'application/json'
      }
    })
    // convert response to json
    .then(r => r.json())
    .then(res => {
      console.log(res);
    });
  }

  return (
	// bind formRef to our form element
    <form ref={formRef} onSubmit={sendFormData}>
      <label htmlFor="nameInput">Name</label>
      <input type="text" id="nameInput" name="name" className="p-3"/>

      <label htmlFor="messageInput">Message</label>
      <textarea id="messageInput" name="message" className="p-3"></textarea>

      <label htmlFor="pictureInput">Picture</label>
      <input type="file" id="pictureInput" name="picture" className="p-3" />

      <button type="submit" className="p-3 bg-yellow-200 hover:bg-green-300">Submit</button>
    </form>
  )
}

export default Form