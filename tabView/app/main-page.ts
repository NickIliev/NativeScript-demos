import { Observable, EventData } from "data/observable";
import { Page } from "ui/page";
import { HelloWorldModel } from "./main-view-model";

var viewModel = new HelloWorldModel();;

// Event handler for Page "navigatingTo" event attached in main-page.xml
export function navigatingTo(args: EventData) {
    // Get the event sender
    var page = <Page>args.object;
    
    var person = new Observable({
        name : 'John Smith',
        age: 18
    });

    viewModel.set('name', person.name);
    viewModel.set('age', person.age);
    
    page.bindingContext = viewModel;
}