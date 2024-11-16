import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({searchParams}: { searchParams: Promise<{ query?: string }> }) {
    const query = (await searchParams).query;
    const posts =[{
        _createdAt: new Date(),
        views: 100,
        author: {_id: "1", name: "Christadrian"},
        description: "This is a description",
        image: "https://cdn.pixabay.com/photo/2024/11/03/22/57/dogs-9172481_1280.jpg",
        title: "We Robots",
        category: "Robots",
    }]
  return (
      <>
          <section className="pink_container">
              <h1 className="heading">
                  Pitch your startup, <br/> Connect with investors
              </h1>
              <p className="sub-heading !max-w-3xl">Submit Ideas, Vote on Pitches, and Get Notified in Virtual Competitions</p>
              <SearchForm query={query}/>
          </section>
          <section className="section_container">
              <p className="text-30-semibold">
                  {query ? `Search results for ${query}` : 'All Startups'}
              </p>
              <ul className="mt-7 card_grid">
                  {posts ?. length > 0 ? (
                      posts.map((post: StartupCardType) => (
                          <StartupCard key={post?._id} post={post}/>
                      ))
                  ) : (
                      <p className="no-result">No startups found</p>
                  )}
              </ul>
          </section>
      </>
  )
}