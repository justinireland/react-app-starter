import movements from './movements'

export default {
  saveKitty: {
    id: 'saveKitty',
    name: 'Save kitten from a tree',
    description: [
      'A neighbors kitten is stuck high up in a tree and you must climb all the way up to rescue it.',
      'Do as many pull ups as you can in 2 minutes. Any variation allowed (strict, kipping, or butterfly)'
    ],
    movementIds: ['pullup'],
    movementSequence: [
      {
        order: 1,
        movementId: 'pullup',
        notes: []          
      },
    ],
    type: 'amrap',    
    timeLimit: 120,
    scoring: {
      instructions: [
        'Enter total number of pull ups'
      ],
      inputLabel: 'qty'
    }
  }
}