//import React, { useState, useEffect } from 'react';
import './Countries.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Card from '../../components/card/Card';
import Spinner from '../../components/spinner/Spinner';
//import { getCountries } from '../../middleware/index';

function Countries() {
  const countries = [
    {
      name: {
        common: 'Mauritania',
        official: 'Islamic Republic of Mauritania',
        nativeName: { ara: { official: 'الجمهورية الإسلامية الموريتانية', common: 'موريتانيا' } }
      },
      tld: ['.mr'],
      cca2: 'MR',
      ccn3: '478',
      cca3: 'MRT',
      cioc: 'MTN',
      independent: true,
      status: 'officially-assigned',
      unMember: true,
      currencies: { MRU: { name: 'Mauritanian ouguiya', symbol: 'UM' } },
      idd: { root: '+2', suffixes: ['22'] },
      capital: ['Nouakchott'],
      altSpellings: [
        'MR',
        'Islamic Republic of Mauritania',
        'al-Jumhūriyyah al-ʾIslāmiyyah al-Mūrītāniyyah'
      ],
      region: 'Africa',
      subregion: 'Western Africa',
      languages: { ara: 'Arabic' },
      translations: {
        ara: { official: 'الجمهورية الإسلامية الموريتانية', common: 'موريتانيا' },
        bre: { official: 'Republik islamek Maouritania', common: 'Maouritania' },
        ces: { official: 'Mauritánská islámská republika', common: 'Mauritánie' },
        cym: { official: 'Islamic Republic of Mauritania', common: 'Mauritania' },
        deu: { official: 'Islamische Republik Mauretanien', common: 'Mauretanien' },
        est: { official: 'Mauritaania Islamivabariik', common: 'Mauritaania' },
        fin: { official: 'Mauritanian islamilainen tasavalta', common: 'Mauritania' },
        fra: { official: 'République islamique de Mauritanie', common: 'Mauritanie' },
        hrv: { official: 'Islamska Republika Mauritanija', common: 'Mauritanija' },
        hun: { official: 'Mauritániai Iszlám Köztársaság', common: 'Mauritánia' },
        ita: { official: 'Repubblica islamica di Mauritania', common: 'Mauritania' },
        jpn: { official: 'モーリタニア·イスラム共和国', common: 'モーリタニア' },
        kor: { official: '모리타니 이슬람 공화국', common: '모리타니' },
        nld: { official: 'Islamitische Republiek Mauritanië', common: 'Mauritanië' },
        per: { official: 'جمهوری اسلامی موریتانی', common: 'موریتانی' },
        pol: { official: 'Islamska Republika Mauretańska', common: 'Mauretania' },
        por: { official: 'República Islâmica da Mauritânia', common: 'Mauritânia' },
        rus: { official: 'Исламская Республика Мавритания', common: 'Мавритания' },
        slk: { official: 'Mauritánska islamská republika', common: 'Mauritánia' },
        spa: { official: 'República Islámica de Mauritania', common: 'Mauritania' },
        swe: { official: 'Islamiska republiken Mauretanien', common: 'Mauretanien' },
        tur: { official: 'Moritanya İslam Cumhuriyeti', common: 'Moritanya' },
        urd: { official: 'اسلامی جمہوریہ موریتانیہ', common: 'موریتانیہ' },
        zho: { official: '毛里塔尼亚伊斯兰共和国', common: '毛里塔尼亚' }
      },
      latlng: [20.0, -12.0],
      landlocked: false,
      borders: ['DZA', 'MLI', 'SEN', 'ESH'],
      area: 1030700.0,
      demonyms: {
        eng: { f: 'Mauritanian', m: 'Mauritanian' },
        fra: { f: 'Mauritanienne', m: 'Mauritanien' }
      },
      flag: '\uD83C\uDDF2\uD83C\uDDF7',
      maps: {
        googleMaps: 'https://goo.gl/maps/im2MmQ5jFjzxWBks5',
        openStreetMaps: 'https://www.openstreetmap.org/relation/192763'
      },
      population: 4649660,
      gini: { 2014: 32.6 },
      fifa: 'MTN',
      car: { signs: ['RIM'], side: 'right' },
      timezones: ['UTC'],
      continents: ['Africa'],
      flags: { png: 'https://flagcdn.com/w320/mr.png', svg: 'https://flagcdn.com/mr.svg' },
      coatOfArms: {
        png: 'https://mainfacts.com/media/images/coats_of_arms/mr.png',
        svg: 'https://mainfacts.com/media/images/coats_of_arms/mr.svg'
      },
      startOfWeek: 'monday',
      capitalInfo: { latlng: [18.07, -15.97] }
    },
    {
      name: {
        common: 'Mauritania',
        official: 'Islamic Republic of Mauritania',
        nativeName: { ara: { official: 'الجمهورية الإسلامية الموريتانية', common: 'موريتانيا' } }
      },
      tld: ['.mr'],
      cca2: 'MR',
      ccn3: '478',
      cca3: 'MRT',
      cioc: 'MTN',
      independent: true,
      status: 'officially-assigned',
      unMember: true,
      currencies: { MRU: { name: 'Mauritanian ouguiya', symbol: 'UM' } },
      idd: { root: '+2', suffixes: ['22'] },
      capital: ['Nouakchott'],
      altSpellings: [
        'MR',
        'Islamic Republic of Mauritania',
        'al-Jumhūriyyah al-ʾIslāmiyyah al-Mūrītāniyyah'
      ],
      region: 'Africa',
      subregion: 'Western Africa',
      languages: { ara: 'Arabic' },
      translations: {
        ara: { official: 'الجمهورية الإسلامية الموريتانية', common: 'موريتانيا' },
        bre: { official: 'Republik islamek Maouritania', common: 'Maouritania' },
        ces: { official: 'Mauritánská islámská republika', common: 'Mauritánie' },
        cym: { official: 'Islamic Republic of Mauritania', common: 'Mauritania' },
        deu: { official: 'Islamische Republik Mauretanien', common: 'Mauretanien' },
        est: { official: 'Mauritaania Islamivabariik', common: 'Mauritaania' },
        fin: { official: 'Mauritanian islamilainen tasavalta', common: 'Mauritania' },
        fra: { official: 'République islamique de Mauritanie', common: 'Mauritanie' },
        hrv: { official: 'Islamska Republika Mauritanija', common: 'Mauritanija' },
        hun: { official: 'Mauritániai Iszlám Köztársaság', common: 'Mauritánia' },
        ita: { official: 'Repubblica islamica di Mauritania', common: 'Mauritania' },
        jpn: { official: 'モーリタニア·イスラム共和国', common: 'モーリタニア' },
        kor: { official: '모리타니 이슬람 공화국', common: '모리타니' },
        nld: { official: 'Islamitische Republiek Mauritanië', common: 'Mauritanië' },
        per: { official: 'جمهوری اسلامی موریتانی', common: 'موریتانی' },
        pol: { official: 'Islamska Republika Mauretańska', common: 'Mauretania' },
        por: { official: 'República Islâmica da Mauritânia', common: 'Mauritânia' },
        rus: { official: 'Исламская Республика Мавритания', common: 'Мавритания' },
        slk: { official: 'Mauritánska islamská republika', common: 'Mauritánia' },
        spa: { official: 'República Islámica de Mauritania', common: 'Mauritania' },
        swe: { official: 'Islamiska republiken Mauretanien', common: 'Mauretanien' },
        tur: { official: 'Moritanya İslam Cumhuriyeti', common: 'Moritanya' },
        urd: { official: 'اسلامی جمہوریہ موریتانیہ', common: 'موریتانیہ' },
        zho: { official: '毛里塔尼亚伊斯兰共和国', common: '毛里塔尼亚' }
      },
      latlng: [20.0, -12.0],
      landlocked: false,
      borders: ['DZA', 'MLI', 'SEN', 'ESH'],
      area: 1030700.0,
      demonyms: {
        eng: { f: 'Mauritanian', m: 'Mauritanian' },
        fra: { f: 'Mauritanienne', m: 'Mauritanien' }
      },
      flag: '\uD83C\uDDF2\uD83C\uDDF7',
      maps: {
        googleMaps: 'https://goo.gl/maps/im2MmQ5jFjzxWBks5',
        openStreetMaps: 'https://www.openstreetmap.org/relation/192763'
      },
      population: 4649660,
      gini: { 2014: 32.6 },
      fifa: 'MTN',
      car: { signs: ['RIM'], side: 'right' },
      timezones: ['UTC'],
      continents: ['Africa'],
      flags: { png: 'https://flagcdn.com/w320/mr.png', svg: 'https://flagcdn.com/mr.svg' },
      coatOfArms: {
        png: 'https://mainfacts.com/media/images/coats_of_arms/mr.png',
        svg: 'https://mainfacts.com/media/images/coats_of_arms/mr.svg'
      },
      startOfWeek: 'monday',
      capitalInfo: { latlng: [18.07, -15.97] }
    }
  ];
  //const [countries, setCountries] = useState(false);
  // useEffect(() => {
  //   getCountries()
  //     .then((res) => {
  //       setCountries(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <div className="countries-wrapper">
      <header className="countries-header">
        <div className="input-container">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
          <input
            className="input-field"
            type="text"
            placeholder="Search for a country..."
            name="country"
          />
        </div>
        <div className="select-container">
          <select className="select-field">
            <option value="">Filter by Region</option>
            <option value="africa">Africa</option>
            <option value="america">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </select>
        </div>
      </header>
      <main className="countries-content">
        {countries === false ? (
          <Spinner />
        ) : (
          countries.map((country, id) => {
            return (
              <Card
                key={id}
                image={country.flags.png}
                name={country.name.common}
                population={country.population}
                region={country.region}
                capital={country.capital}
              />
            );
          })
        )}
      </main>
    </div>
  );
}

export default Countries;
