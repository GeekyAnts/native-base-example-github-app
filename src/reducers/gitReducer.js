var gitRepos= [];
export default function(state=gitRepos, action){
  switch (action.type) {
    case "Get_Repos": { gitRepos = action.payload;
      console.log(action, 'action');
      return gitRepos;
    }
      break;
  }
  return gitRepos;
}
