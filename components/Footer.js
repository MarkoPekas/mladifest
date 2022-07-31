const Footer = () => {
    return (
        <footer className="bg-white" aria-labelledby="footer-heading">
  <h2 id="footer-heading" className="sr-only">Footer</h2>

  <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-16">
    <div className="xl:grid xl:grid-cols-3 xl:gap-8">
      <div className="text-white xl:col-span-1">
        <a href="./index.html" className="text-lg font-bold tracking-tighter text-blue-600 transition duration-500 ease-in-out transform tracking-relaxed lg:pr-8"> mladifest </a>
        <p className="w-1/2 mt-2 text-sm text-gray-500">Najveći festival mladih u međugorju</p>
      </div>
      <div className="grid grid-cols-2 gap-8 mt-12 xl:mt-0 xl:col-span-2">
        <div className="md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h3 className="text-sm font-bold tracking-wider text-blue-500 uppercase">Mladifest 2022</h3>
            <ul role="list" className="mt-4 space-y-2">
              <li>
                <a href="http://www.mladifest.com/medjugorje/webcami/tv%20medjugorje%20live%20webcam.htm" className="text-base font-normal text-gray-500 hover:text-blue-600"> Live Webcam </a>
              </li>
              <li>
                <a href="http://www.mladifest.com/medjugorje/webcami/radio%20mir%20medjugorje.htm" className="text-base font-normal text-gray-500 hover:text-blue-600"> Radio Mir </a>
              </li>
              <li>
                <a href="http://www.medjugorje.hr/" className="text-base font-normal text-gray-500 hover:text-blue-600"> Medjugorje </a>
              </li>
            </ul>
          </div>
          <div className="mt-12 md:mt-0">
            <h3 className="text-sm font-bold tracking-wider text-blue-500 uppercase">Kontakt</h3>
            <ul role="list" className="mt-4 space-y-2">
              <li>
                <a href="mailto:info@medjugorje.hr" className="text-base font-normal text-gray-500 hover:text-blue-600"> info@medjugorje.hr </a>
              </li>
              <li>
                <a href="mailto:lidija_paris@medjugorje.hr" className="text-base font-normal text-gray-500 hover:text-blue-600"> lidija_paris@medjugorje.hr </a>
              </li>
              <li>
                <a href="ured@medjugorje.hr" className="text-base font-normal text-gray-500 hover:text-blue-600"> ured@medjugorje.hr </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h3 className="text-sm font-bold tracking-wider text-blue-500 uppercase">Legal</h3>
            <ul role="list" className="mt-4 space-y-2">
              <li>
                <a href="./changelog.html" className="text-base font-normal text-gray-500 hover:text-blue-600"> Changelog </a>
              </li>
              <li>
                <a href="./faq.html" className="text-base font-normal text-gray-500 hover:text-blue-600"> FAQ </a>
              </li>
            </ul>
          </div>
          <div className="mt-12 md:mt-0">
            <h3 className="text-sm font-bold tracking-wider text-blue-500 uppercase">Socials</h3>
            <ul role="list" className="mt-4 space-y-2">
              <li>
                <a href="https://www.youtube.com/results?search_query=mladifest+2022" className="text-base font-normal text-gray-500 hover:text-blue-600"> Youtube </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="px-4 py-12 mx-auto bg-gray-50 max-w-7xl sm:px-6 lg:px-16">
    <div className="flex flex-wrap items-baseline">
      <span className="mt-2 text-sm font-light text-gray-500">
        Copyright © 2020 - 2021
        <a href="https://wickedlabs.dev" className="mx-2 text-wickedblue hover:text-gray-500" rel="noopener noreferrer">@bebi3</a>. Since 2020
      </span>
    </div>
  </div>
</footer>

    )
}

export default Footer