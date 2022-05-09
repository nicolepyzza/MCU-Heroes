import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { 
        id: 11, 
        name: 'Doctor Strange',
        img: 'https://variety.com/wp-content/uploads/2021/12/doctor-strange.jpg',
        aliases: ['Stephen Vincent Strange', 'Strange Supreme', 'Man of Science', 'Sorcerer Armani', 'Evil Twin', 'The Other Strange'],
        species: 'Human',
        gender: 'Male',
        affiliation: ['Metro General Hospital', 'Masters of the Mystic Arts', 'Guardians of the Multiverse', 'The Avengers'],
        status: 'Alive',
        skills: ['Eldritch Magic', 'Dark Dimension Magic', 'Mirror Dimension Magic', 'Telekinesis', 'Genius-Level Intellect', 'Martial Artist', 'Bilingual'],
        details: 'Doctor Strange is armed with magical powers to defend the multiverse.'
      },
      { 
        id: 12, 
        name: 'Scarlet Witch',
        aliases: ['', ''],
        species: '',
        gender: '',
        affiliation: '',
        status: 'Alive',
        skills: ['', ''],
        details: '' 
      },
      { id: 13, 
        name: 'Ant-Man',
        aliases: ['', ''],
        species: '',
        gender: '',
        affiliation: '',
        status: 'Alive',
        skills: ['', ''],
        details: '' 
      },
      { id: 14, 
        name: 'Black Panther',
        aliases: ['', ''],
        species: '',
        gender: '',
        affiliation: '',
        status: 'Alive',
        skills: ['', ''],
        details: '' 
      },
      { id: 15, 
        name: 'Black Widow',
        aliases: ['', ''],
        species: '',
        gender: '',
        affiliation: '',
        status: 'Dead',
        skills: ['', ''],
        details: '' 
      },
      { id: 16, 
        name: 'Winter Soldier',
        aliases: ['', ''],
        species: '',
        gender: '',
        affiliation: '',
        status: 'Alive',
        skills: ['', ''],
        details: '' 
      },
      { id: 17, 
        name: 'Captain America',
        aliases: ['', ''],
        species: '',
        gender: '',
        affiliation: '',
        status: 'Dead',
        skills: ['', ''],
        details: '' 
      },
      { id: 18, 
        name: 'Captain Marvel',
        aliases: ['', ''],
        species: '',
        gender: '',
        affiliation: '',
        status: 'Alive',
        skills: ['', ''],
        details: '' 
      },
      { id: 19, 
        name: 'Loki',
        aliases: ['', ''],
        species: '',
        gender: '',
        affiliation: '',
        status: 'Dead?',
        skills: ['', ''],
        details: '' 
      },
      { id: 20, 
        name: 'Thor',
        aliases: ['', ''],
        species: '',
        gender: '',
        affiliation: '',
        status: 'Alive',
        skills: ['', ''],
        details: '' 
      },
      { id: 25, 
        name: 'Spiderman',
        aliases: ['', ''],
        species: '',
        gender: '',
        affiliation: '',
        status: 'Alive',
        skills: ['', ''],
        details: '' 
      },
      { id: 24, 
        name: 'Hawkeye',
        aliases: ['', ''],
        species: '',
        gender: '',
        affiliation: '',
        status: 'Alive',
        skills: ['', ''],
        details: '' 
      },
      { id: 23,
        name: 'Hulk',
        aliases: ['', ''],
        species: '',
        gender: '',
        affiliation: '',
        status: 'Alive',
        skills: ['', ''],
        details: '' 
      },
      { id: 22, 
        name: 'Iron Man',
        aliases: ['', ''],
        species: '',
        gender: '',
        affiliation: '',
        status: 'Dead',
        skills: ['', ''],
        details: '' 
      },
      { id: 21, 
        name: 'Shang-Chi',
        aliases: ['', ''],
        species: '',
        gender: '',
        affiliation: '',
        status: 'Alive',
        skills: ['', ''],
        details: '' 
      }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}