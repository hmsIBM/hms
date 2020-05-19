package com.ibm.HospitalApp.entities;

import javax.persistence.*;

import org.hibernate.annotations.GeneratorType;

@Entity
public class ImageModel {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	int id;
	String url;
	public ImageModel() {
		super();
	}
	public ImageModel(int id, String url) {
		super();
		this.id = id;
		this.url = url;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	@Override
	public String toString() {
		return "ImageModel [id=" + id + ", url=" + url + "]";
	}
	
}