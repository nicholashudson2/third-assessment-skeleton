package com.cooksys.tweeter.repository;

import java.util.List;
import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cooksys.tweeter.embedded.Credentials;
import com.cooksys.tweeter.entity.Client;
import com.cooksys.tweeter.entity.Tweet;

public interface ClientRepository extends JpaRepository<Client, Integer> {
	
	Set<Client> findByDeleted(boolean deleted);

	Client findByUserName(String userName);
	
	Client findByUserNameAndDeleted(String userName, boolean deleted);
	
	Set<Client> findByFollowersAndDeleted(Client client, boolean deleted);

	Set<Client> findByFollowingAndDeleted(Client client, boolean deleted);

	Client findByIdAndFollowing(Integer id, Client followedClient);

	Set<Client> findByLikesAndDeleted(Tweet tweet, boolean deleted);

	List<Client> findByMentionsAndDeleted(Tweet tweet, boolean deleted);

//	Client findInFollowers(Client followerClient);

	Client findByCredentialsAndDeleted(Credentials credentials, Boolean deleted);  //Artem added

	Client findByUserNameAndFollowersCredentials(String userName, Credentials credentials);
}
