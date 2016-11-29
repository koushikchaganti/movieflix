package com.koushik.movieflix.repository;

import java.util.List;

import com.koushik.movieflix.entities.User;

public interface UserRepository {

	public List<User> showAllUsers();
	
	public User showOneUser(String uid);
	
	public User createUser(User user);
	
	public User updateUser(User user);
	
	public void deleteUser(User user);
}
