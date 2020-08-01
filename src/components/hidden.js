//let hey = this.state.user.themes[0].parts;
//let hey1 = hey[1].parts.length - 1;
let hey0 = this.state.user.themes;
let i;
for(i=0; i < hey0.length; i++) {
  let hello = hey0[i].parts;
  let newArr = [];
  newArr.push(hello);
  console.log(newArr);
  rait = () => {
    if(this.state.grey) {
      let rew = this.state.grey.raiting.filter(grey => grey.length === 1);
      console.log(this.state.grey);
    }
  }
http://localhost:8888
