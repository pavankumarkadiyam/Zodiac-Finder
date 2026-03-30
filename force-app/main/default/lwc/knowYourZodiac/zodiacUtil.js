class ZodiacUtil {
  static zodiacTraits = [
    { name: "Aries", from: "03-21", to: "04-19", trait: "Bold, energetic, and confident leader", element: "Fire", symbol: "Ram" },
    { name: "Taurus", from: "04-20", to: "05-20", trait: "Reliable, patient, and grounded", element: "Earth", symbol: "Bull" },
    { name: "Gemini", from: "05-21", to: "06-20", trait: "Adaptable, curious, and communicative", element: "Air", symbol: "Twins" },
    { name: "Cancer", from: "06-21", to: "07-22", trait: "Emotional, nurturing, and protective", element: "Water", symbol: "Crab" },
    { name: "Leo", from: "07-23", to: "08-22", trait: "Charismatic, confident, and creative", element: "Fire", symbol: "Lion" },
    { name: "Virgo", from: "08-23", to: "09-22", trait: "Analytical, practical, and detail-oriented", element: "Earth", symbol: "Maiden" },
    { name: "Libra", from: "09-23", to: "10-22", trait: "Balanced, diplomatic, and fair-minded", element: "Air", symbol: "Scales" },
    { name: "Scorpio", from: "10-23", to: "11-21", trait: "Intense, passionate, and resourceful", element: "Water", symbol: "Scorpion" },
    { name: "Sagittarius", from: "11-22", to: "12-21", trait: "Adventurous, optimistic, and freedom-loving", element: "Fire", symbol: "Archer" },
    { name: "Capricorn", from: "12-22", to: "01-19", trait: "Disciplined, ambitious, and responsible", element: "Earth", symbol: "Goat" },
    { name: "Aquarius", from: "01-20", to: "02-18", trait: "Innovative, independent, and humanitarian", element: "Air", symbol: "Water Bearer" },
    { name: "Pisces", from: "02-19", to: "03-20", trait: "Compassionate, artistic, and intuitive", element: "Water", symbol: "Fish" }
  ];

  static getZodiacByDate(month, day) {
    for (let zodiac of this.zodiacTraits) {
        let fromMonth = parseInt(zodiac.from.split("-")[0]);
        let fromDay = parseInt(zodiac.from.split("-")[1]);
        let toMonth = parseInt(zodiac.to.split("-")[0]);
        let toDay = parseInt(zodiac.to.split("-")[1]);

        if((month == fromMonth && day >= fromDay) || (month == toMonth && day <= toDay)) {
            return zodiac;
        }
    }
  }
}

export { ZodiacUtil };