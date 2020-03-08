
export default {
  boxjump: {    
    movementId: 'boxjump',
    label: 'Box Jump',
    description: [
      "Stand in an athletic position, with your feet shoulder-width apart, at a comfortable distance from the box. When you’re ready to jump, drop quickly into a quarter squat, then extend your hips, swing your arms, and push your feet through the floor to propel yourself onto the box.",
      "The rep is complete when both feet are on top of the box and hips and knees are fully extended with head and shoulders over the hips."
    ],
    isWeighted: false,
    measurements: ['reps'],
    videos: ['https://youtu.be/52r_Ul5k03g']  
  },
  burpeeOverBar: {    
    movementId: 'burpeeOverBar',
    label: 'Bar Facing Burpee',
    description: [
      "From a standing position and perpendicular to a loaded barbell, throw/lower yourself to the ground until a fully prone position is achieved. Immediately return to a standing position.",
      "Complete the rep by jumping over the barbell. Both feet must leave the ground at the same time and land on the other side of the barbell at the same time.",
      "The burpee must always be performed perpendicular to the barbell, hence the phrase 'bar facing'."
    ],    
    measurements: ['rep'], 
    isWeighted: false,
    videos: ['https://www.youtube.com/watch?v=TU8QYVW0gDU']      
  },
  cleanJerk: {    
    movementId: 'cleanJerk',
    label: 'Clean & Jerk',
    description: [
      "To execute a clean, a lifter grasps the barbell just outside the legs, typically using a hook grip. Once the barbell is above the knees, the lifter extends explosively, raising the bar as high as possible before quickly dropping into a squat and receiving it in a 'racked' position in front of the neck and resting on the shoulders. To complete the clean, the lifter stands, often propelling the bar upward from the shoulders slightly as the erect position is attained and shifting the grip slightly wider and the feet slightly closer together in preparation for the jerk.",
      "The jerk begins from the 'front rack' position, which is the finishing position of the clean. The lifter dips a few inches by bending the knees, keeping the back vertical, and then explosively extends the knees, propelling the barbell upward off the shoulders, and then quickly dropping underneath the bar by pushing upward with the arms and splitting the legs into a lunge position, one forward and one back. The bar is received overhead on straight arms, and, once stable, the lifter recovers from the split position, bringing the feet back into the same plane as the rest of the body."
    ],
    isWeighted: true,
    measurements: ['reps'],    
    media: {
      videos: ['https://youtu.be/Cw0YyyJ8Tgw']  
    }      
  },
  dbThrusters: {    
    movementId: 'dbThrusters',
    label: 'Dumbbell Thrusters',
    description: [
      "To do the dumbbell thruster hold two weights by your shoulders, with your palms facing. Drop into a squat, then push up and press the weights straight overhead until your arms are fully extended. Then lower the dumbbells back to the starting position."
    ],
    measurements: ['reps'],
    isWeighted: true,
    videos: ['https://youtu.be/M5gEwLTtWbg']      
  },
  deadlift: {    
    movementId: 'deadlift',
    label: 'Deadlift',
    description: [
      "The deadlift is a weight training exercise in which a loaded barbell or bar is lifted off the ground to the level of the hips, torso perpendicular to the floor, before being placed back on the ground."
    ],
    isWeighted: true,
    measurements: ['reps'],    
    videos: ['https://youtu.be/op9kVnSso6Q']
  },
  doubleUnders: {    
    movementId: 'doubleUnders',
    label: 'Double Under',
    description: [
      "A double under is a popular exercise done on a jump rope in which the rope makes two passes per jump instead of just one."
    ],
    isWeighted: false,
    measurements: ['reps'],
    videos: ['https://youtu.be/82jNjDS19lg']  
  },
  ground2Overhead: {
    movementId: 'ground2Overhead',
    label: 'Ground to Overhead',
    description: [
      "Move a weighted object from the ground to an overhead position any way you'd like. You may choose between any clean and jerk or snatch variation. The most efficient way will be determined by your personal skill level with each movement and the weight of the object.",
      "The movement is completed when the object is held directly overhead with knees, hips, and elbows fully extended."
    ],    
    measurements: ['rep'],
    isWeighted: true,  
    videos: ['https://youtu.be/d7AmDN-qNnI']
  },
  hswalk: {    
    movementId: 'hswalk',
    label: 'Handstand Walk',
    description: [
      ""
    ],
    isWeighted: false,
    measurements: ['distance'],
    videos: ['https://youtu.be/I5p2VVDupq8']       
  },
  khspu: {    
    movementId: 'khspu',
    label: 'Handstand Push-Up (Kipping)',
    description: [
      "Flip up to a handstand against the wall. While inverted, bend the elbows and lower your head till it touches the floor. It should be the top of your head and not the front or back",
      "After the top of your head make contact with floor then press until your arms are straight."
    ],
    isWeighted: false,
    measurements: ['reps'], 
    videos: ['https://youtu.be/InRvHNUOlSs']
  },
  pistol: {    
    movementId: 'pistol',
    label: 'Single Leg Squat (Pistol)',
    description: [
      ""
    ],
    isWeighted: false,
    measurements: ['reps'],    
    videos: ['https://youtu.be/qDcniqddTeE']       
  },
  pullup: {
    movementId: 'pullup',
    label: 'Pull Up',
    description: [""],
    measurements: ['reps'],    
    isWeighted: false,
    videos: [''] 

  },  
  row: {    
    movementId: 'row',
    label: 'Rowing',
    description: [
      ""
    ],
    isWeighted: false,
    measurements: ['distance','cals'],    
    videos: ['https://youtu.be/S7HEm-fd534']
  },
  toes2bar: {    
    movementId: 'toes2bar',
    label: 'Toes to Bar',
    description: [
      "Toes to bar are done on a pull-up bar. The movement's name pretty much describes itself; once you're hanging from a pull-up bar, bring your toes up to the bar to achieve a rep."
    ],
    measurements: ['reps'],
    isWeighted: false,
    videos: ['https://youtu.be/_03pCKOv4l4']     
  },
  wallball: {    
    movementId: 'wallball',
    label: 'Wall Ball',
    description: [
      ""
    ],
    measurements: ['reps'],    
    isWeighted: true,
    videos: ['https://youtu.be/EqjGKsiIMCE']        
  },           
}