var t={},e=t=>{let e=[];for(let s=0;s<4;s++)for(let a=0;a<4;a++)0===t[s][a]&&e.push([s,a]);return e},s=()=>Math.random()>.9?4:2;class a{static gameStatus={idle:"idle",playing:"playing",win:"win",lose:"lose"};constructor(t=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]){this.initialState=t,this.state=t.map(t=>[...t]),this.score=0,this.status=a.gameStatus.idle}slideLeft(t){t.forEach(t=>{for(let e=0;e<t.length-1;e++)t[e]===t[e+1]&&(t[e]*=2,this.score+=t[e],t.splice(e+1,1));for(;t.length<4;)t.push(0)})}filledFilter(t){return t.filter(t=>0!==t)}checkAbleToMove(t){let e=t.flat(),s=this.state.flat();for(let t=0;t<e.length;t++)if(e[t]!==s[t])return!0;return!1}moveLeft(){let t=this.state.map(t=>this.filledFilter(t));this.slideLeft(t);let e=this.checkAbleToMove(t);return this.state=t,e}moveRight(){let t=this.state.map(t=>this.filledFilter(t.reverse()));this.slideLeft(t);let e=this.checkAbleToMove(t),s=t.map(t=>t.reverse());return this.state=s,e}swap(t,e){let s=this.state[t][e];this.state[t][e]=this.state[e][t],this.state[e][t]=s}transpose(){for(let t=0;t<4;t++)for(let e=0;e<t;e++)this.swap(t,e)}moveUp(){this.transpose();let t=this.moveLeft();return this.transpose(),t}moveDown(){this.transpose();let t=this.moveRight();return this.transpose(),t}getScore(){return this.score}getState(){return this.state}getStatus(){return this.status}start(){this.status=a.gameStatus.playing,this.fillFreeCell(),this.fillFreeCell(),this.updateBorder()}restart(){this.status=a.gameStatus.idle,this.score=0,this.state=this.initialState.map(t=>[...t]),this.updateBorder()}fillFreeCell(){let t=e(this.state);if(t.length>0){let e=Math.floor(Math.random()*t.length),[a,r]=t[e];this.state[a][r]=s()}}checkLose(){if(!e(this.state).length){for(let t=0;t<4;t++)for(let e=0;e<3;e++)if(this.state[t][e]===this.state[t][e+1])return;for(let t=0;t<4;t++)for(let e=0;e<3;e++)if(this.state[e][t]===this.state[e+1][t])return;this.status=a.gameStatus.lose}}updateBorder(){let t=document.querySelector(".game-field");this.state.forEach((e,s)=>{e.forEach((e,r)=>{let i=t.rows[s].children[r];i.textContent=0===e?"":e,i.className="field-cell",0!==e&&i.classList.add(`field-cell--${e}`),2048===e&&(this.status=a.gameStatus.win)})}),this.checkLose()}}const r=new(t=a),i=document.querySelector(".message-start"),l=document.querySelector(".message-lose"),o=document.querySelector(".message-win"),h=document.querySelector(".button");h.addEventListener("click",e=>{e.preventDefault(),h.classList.toggle("start"),h.classList.toggle("restart"),r.getStatus()===t.gameStatus.idle?(r.start(),h.textContent="Restart"):(r.restart(),h.textContent="Start"),n.textContent=r.getScore(),i.classList.toggle("hidden"),l.classList.add("hidden"),o.classList.add("hidden")});const n=document.querySelector(".game-score");document.addEventListener("keydown",e=>{if(r.getStatus()!==t.gameStatus.playing)return;let s=!1;switch(e.key){case"ArrowLeft":s=r.moveLeft();break;case"ArrowRight":s=r.moveRight();break;case"ArrowUp":s=r.moveUp();break;case"ArrowDown":s=r.moveDown();break;default:return}s&&(n.textContent=r.getScore(),r.fillFreeCell(),r.updateBorder(),r.getStatus()===t.gameStatus.win&&o.classList.remove("hidden"),r.getStatus()===t.gameStatus.lose&&l.classList.remove("hidden"))});
//# sourceMappingURL=index.27ecb388.js.map
