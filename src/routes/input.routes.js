const { Router } = require('express');



const router = Router();


router.get('/', async (req, res) => {
   
  // http://localhost:3001/iecho?text=anana
  const { text } = req.query

  try {
    
    let alt = text.toLowerCase();
      
    let alt2 = text.replace(/\W/g, '').toLowerCase();
    // console.log(alt2);
       
    alt2 === alt2.split('').reverse().join('')
    ? res.status(200).json({ 'palindrome': true, text: alt.split('').reverse().join('') })
    : res.status(200).json({ 'palindrome': false, text: alt.split('').reverse().join('') })


  } catch(error) {
    res.status(400).json({error: "no text"});
  }

});


module.exports = router;