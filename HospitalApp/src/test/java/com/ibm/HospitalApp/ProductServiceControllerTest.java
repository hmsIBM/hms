package com.ibm.HospitalApp;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

import org.junit.Before;
import org.junit.Test;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

//import com.tutorialspoint.demo.model.Product;
import com.ibm.HospitalApp.entities.*;

public class ProductServiceControllerTest extends AbstractTest {
  @Override
  @Before
  public void setUp() {
     super.setUp();
  }
   @Test
   public void getProductsList() throws Exception {
      // String uri = "/api/hospital";
      // MvcResult mvcResult = mvc.perform(MockMvcRequestBuilders.get(uri)
      //    .accept(MediaType.APPLICATION_JSON_VALUE)).andReturn();
      
      // int status = mvcResult.getResponse().getStatus();
      // assertEquals(200, status);
      // String content = mvcResult.getResponse().getContentAsString();
      // Hospital[] hl = super.mapFromJson(content, Hospital[].class);
      System.out.println("Digvijay singh rawat");
//      Product[] productlist = super.mapFromJson(content, Product[].class);
      // assertTrue(hl.length> 0);
   }
//   @Test
// public void createProduct() throws Exception {
//    String uri = "/api/hospital/patient";
//    
//  
//    String inputJson = super.mapToJson(p);
//    MvcResult mvcResult = mvc.perform(MockMvcRequestBuilders.post(uri)
//       .contentType(MediaType.APPLICATION_JSON_VALUE)
//       .content(inputJson)).andReturn();
//    
//    int status = mvcResult.getResponse().getStatus();
//    assertEquals(200, status);
//    String content = mvcResult.getResponse().getContentAsString();
//    assertEquals(content, "Doctor is created successfully");
// }
//  @Test
//  public void updateProduct() throws Exception {
//  String uri = "/api/hospital/max hospital/department/saiyam/patient";
//  Patient p= new Patient();
//  p.setId(999);
//  p.setName("Shubham");
//  p.setGender("male");
//  p.setDisease("Lukemia");
//  p.setEmailId("shubham9@gmail.com");
//  }
}