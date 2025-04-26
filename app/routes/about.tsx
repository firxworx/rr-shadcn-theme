import { HeadMeta } from '@/components/layout/head-meta'

export default function AboutRoute(): React.JSX.Element {
  return (
    <>
      <HeadMeta title="About — React Router App" description="About Page" />
      <section className="grid gap-6 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold">About Page</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut quam et purus volutpat blandit. Ut nec
          pretium felis, eu mattis dui. Vestibulum quis massa ac tortor lobortis feugiat. Maecenas tincidunt, quam non
          molestie lobortis, nibh mauris tristique neque, sit amet pellentesque nulla ante id lacus.
        </p>
        <p>
          Nulla sapien leo, dignissim nec tincidunt et, cursus ut nibh. Ut vel urna id augue malesuada auctor vitae at
          risus. In massa tellus, egestas sit amet neque et, consectetur egestas tortor.
        </p>
        <p>
          Duis lectus odio, rhoncus vehicula leo sed, mattis luctus massa. Cras rhoncus turpis in augue vestibulum, id
          porta quam iaculis. Nullam accumsan nulla eget scelerisque tincidunt.
        </p>
      </section>
    </>
  )
}
