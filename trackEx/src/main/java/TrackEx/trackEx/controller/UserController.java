package TrackEx.trackEx.controller;

import TrackEx.trackEx.dtos.request.*;
import TrackEx.trackEx.dtos.response.UpdateUserIncomeResponse;
import TrackEx.trackEx.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/TrackEx")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public Object registerUser(@RequestBody RegisterUserRequest registerUserRequest ){
        try{
            return userService.register(registerUserRequest);
        }catch (Exception e){
            return e.getMessage();
        }
    }

    @PatchMapping("/login")
    public Object login(@RequestBody LoginUserRequest loginUserRequest){
        try{
            return userService.login(loginUserRequest);
        }catch (Exception e){
            return e.getMessage();
        }
    }

    @GetMapping("/check-balance/{id}")
    public Object checkBalance(@PathVariable String id){
        try{
            return userService.getBalance(id);
        }catch (Exception e){
            return e.getMessage();
        }
    }


    @GetMapping("/check-expenses/{id}")
    public Object checkExpenses(@PathVariable String id){
        try{
            return userService.getExpenses(id);
        }catch (Exception e){
            return e.getMessage();
        }
    }

    @PostMapping("/addIncome")
    public Object addIncome(@RequestBody AddIncomeRequest addIncomeRequest){
        try{
            return userService.addIncome(addIncomeRequest);
        }catch (Exception e){
            return e.getMessage();
        }
    }

    @PatchMapping("/setSavingGoal")
    public Object setSavingGoal(@RequestBody SetSavingGoalRequest setSavingGoalRequest){
        try{
            return userService.setSavingGoal(setSavingGoalRequest);
        }catch (Exception e){
            return e.getMessage();
        }
    }

    @PatchMapping("/updateIncome")
    public Object checkBalance(@RequestBody UpdateUserIncomeRequest request){
        try{
            return userService.updateIncome(request);
        }catch (Exception e){
            return e.getMessage();
        }
    }

    @PostMapping("/addExpenses")
    public Object addExpenses(@RequestBody AddExpensesRequest request){
        try{
            return userService.addExpenses(request);
        }catch (Exception e){
            return e.getMessage();
        }
    }

    @PatchMapping("/logout")
    public String logout(@RequestBody String id){
        try{
            return userService.logout(id);
        }catch (Exception e){
            return e.getMessage();
        }
    }



}
