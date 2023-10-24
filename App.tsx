import { Component } from "react";
import { View } from "react-native";
import { AppEventEmitter, AppEvents } from "./src/helpers/eventEmitter";
import { IModal } from "./src/models";
import { MyModal } from "./src/components/modal/MyModal.component";
import { AppNavigation } from "./src/navigations/app/app.navigation";


interface IState {
  modals: [IModal?],
}

class App extends Component<{}, IState>  { 
  constructor(props: any) {
    super(props);

    this.state = {
      modals: [],
    };
    
  }
  modalUnsubscribe: any = null;
  closeModalUnsubscribe: any = null;
  async componentDidMount() {

    this.modalUnsubscribe = AppEventEmitter.subscribe(
      AppEvents.ShowModal,
      (data: IModal) => {
        const {name, modalChildren} = data;
        const modals = this.state.modals;
        modals.push({name, modalChildren})
        this.setState({modals})
      },
    );
    this.closeModalUnsubscribe = AppEventEmitter.subscribe(
      AppEvents.HideModal,
      (name:string) => {
        const indexOf = this.state.modals.map(modal=>modal!.name).indexOf(name);
        const modals = this.state.modals;
         modals.splice(indexOf,1);
        this.setState({modals});
      },
    );
   
  }
  render() {
    const { modals} = this.state;
    return (<View style={{flex:1}}>   
  {modals.map((modal,i)=><MyModal name={modal!.name} key={i} visible={true}>
      {modal!.modalChildren}
    </MyModal>)}
   
    <AppNavigation />
 
      </View>)
  }
  
}

export default App;
