const { throwError } = require("../../routes/utils/helper")
const { prisma } = require("../../routes/utils/prisma")

const events = [
    {
        name: "Peringatan isra mi'raj di langgar alit",
        desc: "Keluarga Keraton Kasepuhan mengadakan acara Isra Miraj di Langgar Alit yang rutin digunakan untuk peringatan hari besar Islam",
        isFree: true,
        iteration: "WEEKLY",
        image: "https://picsum.photos/200/300",
    },
    {
        name: "PPeringatan nisfu syaban di langgar alit",
        desc: "Peringatan Nisfu Syaban adalah salah satu tradisi yang dilaksanakan di Langgar Alit Keraton Kasepuhan Cirebon",
        isFree: true,
        iteration: "MONTHLY",
        image: "https://picsum.photos/200/300",
    },
    {
        name: "Tadarus di langgar alit",
        desc: "Kegiatan tadarus Alquran ini biasanya dibimbing oleh kaum masjid dan dilakukan dua kali khatam selama bulan Ramadan",
        isFree: true,
        iteration: "YEARLY",
        image: "https://picsum.photos/200/300",
    },
    {
        name: "Peringatan isra mi'raj di langgar alit",
        desc: "Keluarga Keraton Kasepuhan mengadakan acara Isra Miraj di Langgar Alit yang rutin digunakan untuk peringatan hari besar Islam",
        isFree: false,
        price: 25000,
        iteration: "WEEKLY",
        image: "https://picsum.photos/200/300",
    },
    {
        name: "PPeringatan nisfu syaban di langgar alit",
        desc: "Peringatan Nisfu Syaban adalah salah satu tradisi yang dilaksanakan di Langgar Alit Keraton Kasepuhan Cirebon",
        isFree: false,
        price: 25000,
        iteration: "MONTHLY",
        image: "https://picsum.photos/200/300",
    },
    {
        name: "Tadarus di langgar alit",
        desc: "Kegiatan tadarus Alquran ini biasanya dibimbing oleh kaum masjid dan dilakukan dua kali khatam selama bulan Ramadan",
        isFree: false,
        price: 25000,
        iteration: "YEARLY",
        image: "https://picsum.photos/200/300",
    },
]

const eventSeed = async () => {
    try {
        await prisma.events.createMany({ data: events })
    } catch (err) {
        throwError(err)
    }
}

module.exports =  { eventSeed }