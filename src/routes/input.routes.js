const { Router } = require('express');
const { v4 } = require('uuid');



const router = Router();


router.get('/', async (req, res) => {
   
  // http://localhost:3001/iecho?text=anana
  const { text } = req.query

  if(text && text !== '') {
    
    try {
    
      let alt = text.toLowerCase();
        
      let alt2 = text.replace(/\W/g, '').toLowerCase();
      // console.log(alt2);
         
      return alt2 === alt2.split('').reverse().join('')
      ? res.status(200).json({ 'palindrome': true, text: alt.split('').reverse().join(''), id: v4() })
      : res.status(200).json({ 'palindrome': false, text: alt.split('').reverse().join(''), id: v4() })
  
  
    } catch(error) {
      res.status(400).json({error: "no text"});
    }

  } else {

    res.status(400).json({error: "no text"});

  }

});


module.exports = router;