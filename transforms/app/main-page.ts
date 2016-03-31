import { Observable, EventData } from "data/observable";
import { Page } from "ui/page";
import { ViewModel } from "./main-view-model";

var viewModel = new ViewModel();

export function pageLoaded(args: EventData) {
    var page = <Page>args.object;
    page.bindingContext = viewModel;
}

export function onReset(args: EventData) {
    var model = <ViewModel>(<any>args.object).bindingContext;
    model.reset();
}