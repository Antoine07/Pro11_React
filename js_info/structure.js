const feedback = {
  choice: null,
  multiplication: [],
  count: 0,
  scoreBefore: 0,
  scoreAfter: 0,
  message: "",
  status: null,
};

try {
    if( feedback.choice === undefined)
        throw "Error";
  } catch (error) {
    console.error(error);
   
  }