function Page(){
    return(
        <main className="flex gap-10 flex-col items-center justify-between px-24 pt-20">
        <div className="inset-0 bg-gradient-to-b from-[#60a5fa] to-[white] w-full absolute h-[250px] z-[1]"></div>
        <section className="w-full h-full min-w-screen max-w-[1440px] flex flex-col gap-5 z-[2]">
          <div className="h-[400px] w-full rounded-xl flex mt-14 overflow-hidden">
            <Carousel/>
          </div>
          <Card title={"🧭 TOP UP CEPAT"} className='mx-5 h-full'>
          </Card>
        </section>
      
      </main>
    )
}
export default Page