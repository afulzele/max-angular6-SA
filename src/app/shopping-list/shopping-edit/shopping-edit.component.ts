import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm:NgForm;

  subscription:Subscription;
  editedMode = false;
  editedItemNumber:number;
  editedItem:ingredient;

  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (index:number)=>{
        this.editedMode = true;
        this.editedItemNumber = index;
        this.editedItem = this.shoppingListService.getIngredient(index);
        // console.log(this.editedItem);
        this.slForm.setValue({
          name:this.editedItem.name,
          amount:this.editedItem.amount
        });
      }
    );
  }

  onAddItem(form:NgForm){
    const value = form.value;
    const newIngredient = new ingredient(value.name, value.amount);
    if(this.editedMode){
      this.shoppingListService.updateIngredient(this.editedItemNumber, newIngredient)
    } else{
      this.shoppingListService.addIngredient(newIngredient);
    }
    this.editedMode = false;
    form.reset();
  }

  onDelete(){
    this.shoppingListService.deleteIngredient(this.editedItemNumber);
    this.onClear();
  }

  onClear(){
    this.slForm.reset();
    this.editedMode = false;
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
