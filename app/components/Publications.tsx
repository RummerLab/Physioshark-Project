export default function Publications() {
  const publications = [
    {
      category: "Newborn blacktip reef sharks and simulated climate change conditions",
      papers: [
        {
          title: "Same species, different prerequisites: investigating body condition and foraging success in young reef sharks between an atoll and an island system",
          authors: "Weideli, O.C., Bouyoucos, I.A., Papastamatiou, Y.P., Mescam, G., Rummer, J.L., Planes, S.",
          year: 2019,
          journal: "Scientific Reports",
          volume: "9:13447",
          doi: "https://doi.org/10.1038/s41598-019-49761-2",
          metrics: {
            if: "5.228",
            citations: "n/a",
            altmetric: "46"
          }
        },
        {
          title: "Dead tired: Evaluating the physiological status and survival of neonatal reef sharks under stress",
          authors: "Bouyoucos, I.A., Weideli, O.C., Planes, S., Simpfendorfer, C.A., Rummer, J.L.",
          year: 2018,
          journal: "Conservation Physiology",
          volume: "6:1 coy053",
          doi: "https://doi.org/10.1093/conphys/coy053",
          metrics: {
            if: "3.634",
            citations: "n/a",
            altmetric: "38"
          }
        },
        {
          title: "Validation of a portable, waterproof blood pH analyzer for elasmobranchs",
          authors: "Talwar, B., Bouyoucos, I.A., Shipley, O., Rummer, J.L., Mandelman, J.W., Brooks, E.J., Grubbs, R.D.",
          year: 2017,
          journal: "Conservation Physiology",
          volume: "5 (1): cox012",
          doi: "https://doi.org/10.1093/conphys/cox012",
          metrics: {
            if: "3.634",
            citations: "n/a",
            altmetric: "n/a"
          }
        }
      ]
    },
    {
      category: "Working with sharks in the field & laboratory",
      papers: [
        {
          title: "Analyzing tropical elasmobranch blood samples in the field: Blood stability during storage and validation of the HemoCue® haemoglobin analyser",
          authors: "Schwieterman, G.D., Bouyoucos, I.A., Potgieter, K., Simpfendorfer, C.A., Brill, R.W., Rummer, J.L.",
          year: 2019,
          journal: "Conservation Physiology",
          volume: "(accepted 15 September 2019)",
          doi: "https://doi.org/10.1093/conphys/coz081",
          metrics: {
            if: "3.634",
            citations: "n/a",
            altmetric: "n/a"
          }
        },
        {
          title: "Estimating oxygen uptake rates to understand stress in sharks and rays",
          authors: "Bouyoucos, I.A., Simpfendorfer, C.A., Rummer, J.L.",
          year: 2019,
          journal: "Reviews in Fish Biology & Fisheries",
          volume: "29(2):297-311",
          doi: "https://doi.org/10.1007/s11160-019-09553-3",
          metrics: {
            if: "3.299",
            citations: "1",
            altmetric: "29"
          }
        }
      ]
    },
    {
      category: "Elasmobranchs and climate change",
      papers: [
        {
          title: "Biological Responses of sharks to ocean acidification",
          authors: "Rosa, R., Rummer, J.L., Munday, P.L.",
          year: 2017,
          journal: "Biology Letters",
          volume: "13(3) 20160796",
          doi: "https://doi.org/10.1098/rsbl.2016.0796",
          metrics: {
            if: "3.089",
            citations: "3",
            altmetric: "56"
          }
        }
      ]
    },
    {
      category: "Epaulette sharks hatching and developing under elevated temperatures",
      papers: [
        {
          title: "Too hot to handle? Using movement to alleviate the effects of elevated temperatures in a benthic elasmobranch, Hemiscyllium ocellatum",
          authors: "Gervais, C.R., Nay, T.J., Renshaw, G., Johansen, J.L., Steffensen, J.F., Rummer, J.L.",
          year: 2018,
          journal: "Marine Biology",
          volume: "165:162",
          doi: "https://doi.org/10.1007/s00227-018-3427-7",
          metrics: {
            if: "2.215",
            citations: "n/a",
            altmetric: "34"
          }
        },
        {
          title: "Developing in warm water: Irregular colouration and patterns of a neonate elasmobranch",
          authors: "Gervais, C., Mourier, J., Rummer, J.L.",
          year: 2016,
          journal: "Marine Biodiversity",
          volume: "2016:1-2",
          doi: "https://doi.org/10.1007/s12526-015-0429-2",
          metrics: {
            if: "1.104",
            citations: "1",
            altmetric: "50"
          }
        }
      ]
    }
  ]

  return (
    <section id="publications" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <hr className="border-gray-200 mb-16" />
        
        {/* Main Title */}
        <h1 className="text-5xl font-bold text-gray-700 uppercase text-center mb-16">
          Publications
        </h1>

        {/* Publications Content */}
        <div className="max-w-6xl mx-auto">
          {publications.map((section, idx) => (
            <div key={idx} className="mb-12">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                {/* Category Title */}
                <div className="md:col-span-4">
                  <h2 className="text-xl font-semibold text-gray-700 sticky top-24">
                    {section.category}
                  </h2>
                </div>

                {/* Papers List */}
                <div className="md:col-span-8">
                  <div className="space-y-8">
                    {section.papers.map((paper, paperIdx) => (
                      <div key={paperIdx} className="space-y-3">
                        <div className="text-gray-600">
                          {paper.authors} ({paper.year}) {paper.title}. <em>{paper.journal}</em> {paper.volume}. doi:{' '}
                          <a 
                            href={paper.doi}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800"
                          >
                            {paper.doi.replace('https://doi.org/', '')}
                          </a>
                        </div>
                        <div className="text-sm text-gray-500">
                          IF: {paper.metrics.if}, Citations: {paper.metrics.citations}, Altmetric: {paper.metrics.altmetric}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 