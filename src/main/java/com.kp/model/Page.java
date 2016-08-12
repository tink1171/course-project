package com.kp.model;


import javax.persistence.*;

@Entity
@Table(name = "page")
public class Page {

    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "content_1")
    private String content_1;

    @Column(name = "content_2")
    private String content_2;

    @Column(name = "content_3")
    private String content_3;

    @Column(name = "content_4")
    private String content_4;

    @Column(name = "template")
    private int template;

    public Page(){

    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getContent_1() {
        return content_1;
    }

    public void setContent_1(String content_1) {
        this.content_1 = content_1;
    }

    public String getContent_2() {
        return content_2;
    }

    public void setContent_2(String content_2) {
        this.content_2 = content_2;
    }

    public String getContent_3() {
        return content_3;
    }

    public void setContent_3(String content_3) {
        this.content_3 = content_3;
    }

    public String getContent_4() {
        return content_4;
    }

    public void setContent_4(String content_4) {
        this.content_4 = content_4;
    }

    public int getTemplate() {
        return template;
    }

    public void setTemplate(int template) {
        this.template = template;
    }

    @Override
    public String toString() {
        return "Page{" +
                "id=" + id +
                ", content_1='" + content_1 + '\'' +
                ", content_2='" + content_2 + '\'' +
                ", content_3='" + content_3 + '\'' +
                ", content_4='" + content_4 + '\'' +
                ", template=" + template +
                '}';
    }
}
