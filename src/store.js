export default {
  pokemon: [
    {
      id: 1,
      name: 'Pokemon 1',
      type: ['Normal'],
      heightFt: 12,
      heightIn: 3,
      weight: 123,
      class: 'The example pokemon',
      description: 'This pokemon likes to be used as an example in my code'
    },
    {
      id: 2,
      name: 'Pokemon 2',
      type: ['Water', 'Ghost'],
      heightFt: 1,
      weight: 1,
      class: 'The plastic bag pokemon',
      description:
        'This pokemon inhabits the waste that is tossed into the ocean'
    },
    {
      id: 3,
      name: 'Pokemon 3',
      type: ['Normal'],
      heightFt: 7,
      heightIn: 3,
      weight: 120,
      class: 'The smoke pokemon',
      description: 'This pokemon is smokey'
    },
    {
      id: 4,
      name: 'Pokemon 4',
      type: ['Dark'],
      heightFt: 5,
      heightIn: 11,
      weight: 400,
      class: 'The Sumo pokemon',
      description: 'This pokemon is literally just a sumo wrestler'
    },
    {
      id: 5,
      name: 'Pokemon 5',
      type: ['Fire'],
      heightFt: 2,
      heightIn: 3,
      weight: 34,
      class: 'The ember pokemon',
      description: 'It likes to burn, but not very hot'
    },
    {
      id: 6,
      name: 'Pokemon 6',
      type: ['Poison'],
      heightFt: 1,
      heightIn: 11,
      weight: 2,
      class: 'The virus pokemon',
      description:
        'This pokemon is a virus and likes to be used as an example in my code'
    }
  ],

  teams: [
    {
      id: 1,
      name: 'Team Rocket',
      slots: [
        'Pokemon 1',
        'Pokemon 2',
        'Pokemon 3',
        'Pokemon 4',
        'Pokemon 5',
        'Pokemon 6'
      ]
    },
    {
      id: 2,
      name: 'Team Magma',
      slots: ['Pokemon 3', 'Pokemon 4', 'Pokemon 5', 'Pokemon 6']
    },
    {
      id: 3,
      name: 'Team Plasma',
      slots: ['Pokemon 1', 'Pokemon 2', 'Pokemon 5', 'Pokemon 6']
    },
    {
      id: 4,
      name: 'Team Yell',
      slots: ['Pokemon 1', 'Pokemon 6']
    }
  ]
};
