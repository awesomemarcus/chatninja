export default {
  categoriesAdd({Meteor,LocalState,FlowRouter}, formData){
    Meteor.call("categoriesAdd", formData, function(error){
      if(error){
         return LocalState.set("CATEGORIES_ADD_ERROR",error.message);
      }
      FlowRouter.go('/categories/list')
    });
  },
  categoriesUpdate({Meteor,LocalState,FlowRouter}, formData){
    Meteor.call("categoriesUpdate", formData, function(error){
      if(error){
         return LocalState.set("categories_add_error",error.message);
      }
      FlowRouter.go('/categories/list')
    });
  },
  categoriesDelete() {

  },
  clearErrors({LocalState}){
    return LocalState.set("categories_add_error",null);
  },
}
