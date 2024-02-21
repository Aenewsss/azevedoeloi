"use client"

import { useFormState, useFormStatus } from "react-dom";
import { uploadImage } from "./actions/upload-image.action";

const imageSrc = ''

export default function Home() {

  const [state, formAction] = useFormState(uploadImage, imageSrc)

  return (
    <main>
      <form action={formAction} method="POST">
        <input type="text" placeholder="name" name="name" />
        <input className="text-dark" type="file" accept="image/*" name="image" />
        <Button />
        <img style={{ height: 200, width: 200, objectFit: 'cover' }} src={state} alt="" />
      </form>
    </main>
  );
}

function Button() {
  const { pending } = useFormStatus()
  return <button type="submit" className="mt-2 text-black">{pending ? 'Carregando' : 'Submit'}</button>
}