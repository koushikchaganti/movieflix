package com.koushik.movieflix.entities;

import java.util.List;
import java.util.UUID;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import com.fasterxml.jackson.annotation.JsonManagedReference;

/**
 * @author Koushik
 *
 */
@Entity
@Table
@NamedQueries({
	@NamedQuery(name="MovieEntity.findAll", query="select m from MovieEntity m"),
	@NamedQuery(name="MovieEntity.findTitlesByYear",query="select m from MovieEntity m where m.year=:mYear"),
	@NamedQuery(name="MovieEntity.findTitlesByGenre",query="select m from MovieEntity m where m.genre LIKE :mGenre"),
	@NamedQuery(name="MovieEntity.findTitlesByTitle",query="select m from MovieEntity m where m.title LIKE :mTitle"),
	@NamedQuery(name="MovieEntity.findTitlesByType",query="select m from MovieEntity m where m.type=:mType"),
	@NamedQuery(name="MovieEntity.findTitlesByImdbVotes",query="select m from MovieEntity m ORDER BY m.imdbvotes desc"),
	@NamedQuery(name="MovieEntity.findTitlesByImdbRating",query="select m from MovieEntity m ORDER BY m.imdbrating desc"),
	@NamedQuery(name="MovieEntity.findTitlesByTopType",query="select m from MovieEntity m where m.type=:mTopType"+" ORDER BY m.imdbrating desc")
})
public class MovieEntity {
	@Id
	private String id;
	private String title;
	private String year;
	private String rated;
	private String released;
	private String runtime;
	private String genre;
	private String director;
	private String writer;
	private String actors;
	private String plot;
	private String language;
	private String country;
	private String awards;
	private String poster;
	private String metascore;
	private float imdbrating;
	private int imdbvotes;
	private String imdbid;
	private String type;
	private double avgRating;
	
	@OneToMany(mappedBy="movieEntity",fetch=FetchType.EAGER,orphanRemoval=true)
	@JsonManagedReference
	private List<CommentEntity> commentEntity;
		
	public List<CommentEntity> getCommentEntity() {
		return commentEntity;
	}

	public void setCommentEntity(List<CommentEntity> commentEntity) {
		this.commentEntity = commentEntity;
	}

	public MovieEntity() {
		this.id = UUID.randomUUID().toString();		
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getYear() {
		return year;
	}

	public void setYear(String year) {
		this.year = year;
	}

	public String getRated() {
		return rated;
	}

	public void setRated(String rated) {
		this.rated = rated;
	}

	public String getReleased() {
		return released;
	}

	public void setReleased(String released) {
		this.released = released;
	}

	public String getRuntime() {
		return runtime;
	}

	public void setRuntime(String runtime) {
		this.runtime = runtime;
	}

	public String getGenre() {
		return genre;
	}

	public void setGenre(String genre) {
		this.genre = genre;
	}

	public String getDirector() {
		return director;
	}

	public void setDirector(String director) {
		this.director = director;
	}

	public String getWriter() {
		return writer;
	}

	public void setWriter(String writer) {
		this.writer = writer;
	}

	public String getActors() {
		return actors;
	}

	public void setActors(String actors) {
		this.actors = actors;
	}

	public String getPlot() {
		return plot;
	}

	public void setPlot(String plot) {
		this.plot = plot;
	}

	public String getLanguage() {
		return language;
	}

	public void setLanguage(String language) {
		this.language = language;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getAwards() {
		return awards;
	}

	public void setAwards(String awards) {
		this.awards = awards;
	}

	public String getPoster() {
		return poster;
	}

	public void setPoster(String poster) {
		this.poster = poster;
	}

	public String getMetascore() {
		return metascore;
	}

	public void setMetascore(String metascore) {
		this.metascore = metascore;
	}

	public float getImdbrating() {
		return imdbrating;
	}

	public void setImdbrating(float imdbrating) {
		this.imdbrating = imdbrating;
	}

	public int getImdbvotes() {
		return imdbvotes;
	}

	public void setImdbvotes(int imdbvotes) {
		this.imdbvotes = imdbvotes;
	}

	public String getImdbid() {
		return imdbid;
	}

	public void setImdbid(String imdbid) {
		this.imdbid = imdbid;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public double getAvgRating() {
		return avgRating;
	}

	public void setAvgRating(double avgRating) {
		this.avgRating = avgRating;
	}

	@Override
	public String toString() {
		return "MovieEntity [id=" + id + ", title=" + title + ", year=" + year + ", rated=" + rated + ", released="
				+ released + ", runtime=" + runtime + ", genre=" + genre + ", director=" + director + ", writer="
				+ writer + ", actors=" + actors + ", plot=" + plot + ", language=" + language + ", country=" + country
				+ ", awards=" + awards + ", poster=" + poster + ", metascore=" + metascore + ", imdbrating="
				+ imdbrating + ", imdbvotes=" + imdbvotes + ", imdbid=" + imdbid + ", type=" + type + ", avgRating="
				+ avgRating + "]";
	}

	
	
}
