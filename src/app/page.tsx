export default function Home() {

  async function callForm(form: FormData) {
    "use server"
    console.log(form.get('image'))
    const file = form.get('image')

  }

  return (
    <main>
      <form action={callForm} method="post">
      <input type="text" placeholder="name" name="name" />
      <input type="file" accept="image/*" name="image" />
        <button type="submit" className="mt-2 text-black">Submit</button>
      </form>
    </main>
  );
}