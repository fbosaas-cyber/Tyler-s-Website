export default function Home() {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh' 
    }}>
      <h1>TEST</h1>
    </div>
  )
            <p className="mt-4 text-lg text-[color:var(--muted)] max-w-xl">
              I build dynamic, performant web apps with a focus on UX, accessibility, and modern tooling.
            </p>

            <div className="mt-8 flex gap-4">
              <Link href="/projects" className="px-5 py-3 bg-primary rounded text-black font-medium">View Projects</Link>
              <Link href="#contact" className="px-5 py-3 border border-neutral-700 rounded">Contact</Link>
            </div>
          </div>

          <motion.div initial={{ scale: 0.98 }} animate={{ scale: 1 }} transition={{ duration: 0.6 }} className="bg-[color:var(--surface)] p-6 rounded-lg flex flex-col items-center">
            <img src="/profile-photo.png" alt="Profile" className="w-64 h-64 object-cover rounded-full mb-6 border-4 border-primary" />
            <h3 className="font-semibold text-2xl mb-2">Tyler Robinson</h3>
            <p className="text-lg text-[color:var(--muted)] mb-4 text-center max-w-2xl">
              OEM Sales Manager at Continental ContiTech, specializing in driving growth and value for OEM clients across the South USA region. With a proven track record in sales strategy, customer relationship management, and consultative solutions, I am passionate about delivering results and building lasting partnerships. My experience spans automotive, industrial, and technology sectors, with a focus on innovation and client success.
            </p>
          </motion.div>
        </section>

        <section className="mt-20">
          <h2 className="text-2xl font-semibold">Recent Projects</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Simple static previews; Projects page has full list */}
            <div className="p-4 bg-[color:var(--surface)] rounded">
              <h4 className="font-semibold">Project A</h4>
              <p className="text-[color:var(--muted)] mt-2">UPDATE THE PROJECTS</p>
            </div>

            <div className="p-4 bg-[color:var(--surface)] rounded">
              <h4 className="font-semibold">Project B</h4>
              <p className="text-[color:var(--muted)] mt-2">UPDATE THE PROJECTS</p>
            </div>
          </div>
        </section>

        <section id="contact" className="mt-20">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="mt-2 text-[color:var(--muted)]">Want to work together? Email me at <a className="underline" href="mailto:tgrayrobinson@gmail.com">tgrayrobinson@gmail.com</a></p>
        </section>
      </main>

      <Footer />
    </>
  )
}
