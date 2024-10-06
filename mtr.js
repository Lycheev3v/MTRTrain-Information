const line = {
  KTL: {
    text: "觀塘線",
    color: "#7ed957",
    sta: [
      { code: "WHA", name: "Whampoa" },
      { code: "HOM", name: "Ho Man Tin" },
      { code: "YMT", name: "Yau Ma Tei" },
      { code: "MOK", name: "Mong Kok" },
      { code: "PRE", name: "Prince Edward" },
      { code: "SKM", name: "Shek Kip Mei" },
      { code: "KOT", name: "Kowloon Tong" },
      { code: "LOF", name: "Lok Fu" },
      { code: "WTS", name: "Wong Tai Sin" },
      { code: "DIH", name: "Diamond Hill" },
      { code: "CHH", name: "Choi Hung" },
      { code: "KOB", name: "Kowloon Bay" },
      { code: "NTK", name: "Ngau Tau Kok" },
      { code: "KWT", name: "Kwun Tong" },
      { code: "LAT", name: "Lam Tin" },
      { code: "YAT", name: "Yau Tong" },
      { code: "TIK", name: "Tiu Keng Leng" },
    ],
  },
  ISL: {
    text: "港島線",
    color: "#004aad",
    sta: [
      { code: "KET", name: "Kennedy Town" },
      { code: "HKU", name: "HKU" },
      { code: "SYP", name: "Sai Ying Pun" },
      { code: "SHW", name: "Sheung Wan" },
      { code: "CEN", name: "Central" },
      { code: "ADM", name: "Admiralty" },
      { code: "WAC", name: "Wan Chai" },
      { code: "CAB", name: "Causeway Bay" },
      { code: "TIH", name: "Tin Hau" },
      { code: "FOH", name: "Fortress Hill" },
      { code: "NOP", name: "North Point" },
      { code: "QUB", name: "Quarry Bay" },
      { code: "TAK", name: "Tai Koo" },
      { code: "SWH", name: "Sai Wan Ho" },
      { code: "SKW", name: "Shau Kei Wan" },
      { code: "HFC", name: "Heng Fa Chuen" },
      { code: "CHW", name: "Chai Wan" },
    ],
  },
  TWL: {
    text: "荃灣線",
    color: "#ff3131",
    sta: [
      { code: "CEN", name: "Central" },
      { code: "ADM", name: "Admiralty" },
      { code: "TST", name: "Tsim Sha Tsui" },
      { code: "JOR", name: "Jordan" },
      { code: "YMT", name: "Yau Ma Tei" },
      { code: "MOK", name: "Mong Kok" },
      { code: "PRE", name: "Price Edward" },
      { code: "SSP", name: "Sham Shui Po" },
      { code: "CSW", name: "Cheung Sha Wan" },
      { code: "LCK", name: "Lai Chi Kok" },
      { code: "MEF", name: "Mei Foo" },
      { code: "LAK", name: "Lai King" },
      { code: "KWF", name: "Kwai Fong" },
      { code: "KWH", name: "Kwai Hing" },
      { code: "TWH", name: "Tai Wo Hau" },
      { code: "TSW", name: "Tsuen Wan" },
    ],
  },
  SIL: {
    text: "南港島線",
    color: "#cbcd09",
    sta: [
      { code: "ADM", name: "Admiralty" },
      { code: "OCP", name: "Ocean Park" },
      { code: "WCH", name: "Wong Chuk Hang" },
      { code: "LET", name: "Lei Tung" },
      { code: "SOH", name: "South Horizons" },
    ],
  },
  TCL: {
    text: "東涌線",
    color: "#f6943d",
    sta: [
      { code: "HOK", name: "Hong Kong" },
      { code: "KOW", name: "Kowloon" },
      { code: "OLY", name: "Olympic" },
      { code: "NAC", name: "Nam Cheong" },
      { code: "LAK", name: "Lai King" },
      { code: "TSY", name: "Tsing Yi" },
      { code: "SUN", name: "Sunny Bay" },
      { code: "TUC", name: "Tung Chung" },
    ],
  },
  EAL: {
    text: "東鐵線",
    color: "#5ce1e6",
    sta: [
      { code: "ADM", name: "Admiralty" },
      { code: "EXC", name: "Exhibition Centre" },
      { code: "HUH", name: "Hung Hom" },
      { code: "MKK", name: "Mong Kok East" },
      { code: "KOT", name: "Kowloon Tong" },
      { code: "TAW", name: "Tai Wai" },
      { code: "SHT", name: "Sha Tin" },
      { code: "FOT", name: "Fo Tan" },
      { code: "RAC", name: "Racecourse" },
      { code: "UNI", name: "University" },
      { code: "TAP", name: "Tai Po Market" },
      { code: "TWO", name: "Tai Wo" },
      { code: "FAN", name: "Fanling" },
      { code: "SHS", name: "Sheung Shui" },
      { code: "LOW", name: "Lo Wu" },
      { code: "LMC", name: "Lok Ma Chau" },
    ],
  },
  TML: {
    text: "屯馬線",
    color: "#8d6019",
    sta: [
      { code: "WKS", name: "Wu Kai Sha" },
      { code: "MOS", name: "Ma On Shan" },
      { code: "HEO", name: "Heng On" },
      { code: "TSH", name: "Tai Shui Hang" },
      { code: "SHM", name: "Shek Mun" },
      { code: "CIO", name: "City One" },
      { code: "STW", name: "Sha Tin Wai" },
      { code: "CKT", name: "Che Kung Temple" },
      { code: "TAW", name: "Tai Wai" },
      { code: "HIK", name: "Hin Keng" },
      { code: "DIH", name: "Diamond Hill" },
      { code: "KAT", name: "Kai Tak" },
      { code: "SUW", name: "Sung Wong Toi" },
      { code: "TKW", name: "To Kwa Wan" },
      { code: "HOM", name: "Ho Man Tin" },
      { code: "HUH", name: "Hung Hom" },
      { code: "ETS", name: "East Tsim Sha Tsui" },
      { code: "AUS", name: "Austin" },
      { code: "NAC", name: "Nam Cheong" },
      { code: "MEF", name: "Mei Foo" },
      { code: "TWW", name: "Tsuen Wan West" },
      { code: "KSR", name: "Kam Sheung Road" },
      { code: "YUL", name: "Yuen Long" },
      { code: "LOP", name: "Long Ping" },
      { code: "TIS", name: "Tin Shui Wai" },
      { code: "SIH", name: "Siu Hong" },
      { code: "TUM", name: "Tuen Mun" },
    ],
  },
  AEL: {
    text: "機場快線",
    color: "#3d9ea0",
    sta: [
      { code: "HOK", name: "Hong Kong" },
      { code: "KOW", name: "Kowloon" },
      { code: "TSY", name: "Tsing Yi" },
      { code: "AIR", name: "Airport" },
      { code: "AWE", name: "AsiaWorld Expo" },
    ],
  },
  TKL: {
    text: "將軍澳線",
    color: "#8d45ab",
    sta: [
      { code: "NOP", name: "North Point" },
      { code: "QUB", name: "Quarry Bay" },
      { code: "YAT", name: "Yau Tong" },
      { code: "TIK", name: "Tiu Keng Leng" },
      { code: "TKO", name: "Tseung Kwan O" },
      { code: "LHP", name: "LOHAS Park" },
      { code: "HAH", name: "Hang Hau" },
      { code: "POA", name: "Po Lam" },
    ],
  },
};
function createLineBtn() {
  // finding container
  const buttonContainer = document.querySelector(".linebtn");
  // loop line
  Object.keys(line).forEach((linescode) => {
    const lineData = line[linescode];

    const button = document.createElement("button");

    button.textContent = lineData.text;
    button.style.borderColor = lineData.color;

    // Store line and station data in button dataset
    button.dataset.line = linescode; // Line key like 'KTL', 'ISL'

    button.addEventListener("click", onClick);

    buttonContainer.appendChild(button);
  });
}
createLineBtn();

async function onClick(event) {
  const linesBtn = event.currentTarget;
  const linescode = linesBtn.dataset.line;
  const upStationContainer = document.querySelector(".uppath");
  const downStationContainer = document.querySelector(".downpath");
  upStationContainer.innerHTML = "";
  downStationContainer.innerHTML = "";
  // Create a button for each line
  line[linescode].sta.forEach(async (station) => {
    const stationCode = station.code;

    let result2 = await getDown(linescode, stationCode);
    if (result2) {
      const button2 = document.createElement("button");
      button2.style.backgroundColor = line[linescode].color;
      downStationContainer.appendChild(button2);
      button2.innerHTML = `<div>${station.name}</div>
    <div>下班列車：${result2.nextTime}</div>
    <div>月台：${result2.platform}</div>`;
      console.log(result2);
    }

    let result1 = await getUp(linescode, stationCode);
    if (!result1) return;
    const button1 = document.createElement("button");
    button1.style.backgroundColor = line[linescode].color;
    upStationContainer.appendChild(button1);
    button1.innerHTML = `<div>${station.name}</div>
    <div>下班列車：${result1.nextTime}</div>
    <div>月台：${result1.platform}</div>`;
    console.log(result1);

    const currTime = document.querySelector("#updateTime");
    currTime.innerHTML = `最新時間：${result1.currTime}`;
  });
}

async function getUp(lines, sta) {
  const api = `https://rt.data.gov.hk/v1/transport/mtr/getSchedule.php?line=${lines}&sta=${sta}`;

  const response = await fetch(api);
  const result = await response.json();

  if (result.data[`${lines}-${sta}`].UP) {
    let upNextTime = result.data[`${lines}-${sta}`].UP[0].time;

    upNextTime = upNextTime.split(" ")[1];

    const upPlat = result.data[`${lines}-${sta}`].UP[0].plat;
    const upCurrTime = result.data[`${lines}-${sta}`].curr_time;
    return { nextTime: upNextTime, platform: upPlat, currTime: upCurrTime };
  }
}

async function getDown(lines, sta) {
  const api = `https://rt.data.gov.hk/v1/transport/mtr/getSchedule.php?line=${lines}&sta=${sta}`;

  const response = await fetch(api);
  const result = await response.json();

  if (result.data[`${lines}-${sta}`].DOWN) {
    let downNextTime = result.data[`${lines}-${sta}`].DOWN[0].time;

    downNextTime = downNextTime.split(" ")[1];

    const downPlat = result.data[`${lines}-${sta}`].DOWN[0].plat;
    return { nextTime: downNextTime, platform: downPlat };
  }
}
