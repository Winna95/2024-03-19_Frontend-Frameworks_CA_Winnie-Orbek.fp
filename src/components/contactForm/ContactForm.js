import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {StyledForm, StyledInput, StyledTextDiv} from "./ContactForm.styles"
import {BaseButton} from "./button.styles";
import styles from "./ContactForm.module.css"
import {HeaderText} from "./H1.styles";

const schema = yup
    .object({
        fullName: yup
            .string()
            .min(3, 'Your full name should be at least 3 characters.')
            .required('Please enter your first name'),
        subject: yup
            .string()
            .min(3, 'Your subject must be at least 3 characters.')
            .required('Please type in your subject'),
        email: yup
            .string()
            .email('Please enter a valid email address')
            .required('Please enter your email'),
        body: yup
            .string()
            .min(3, 'Your body should be at least 3 characters.')
            .max(1000, 'Your body cannot be longer than 1000 characters.')
            .required('please enter your body'),
    })
    .required();

function ContactForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    function onSubmit(data) {
        console.log(data);
    }

    return (
        <div>
            <HeaderText>Contact us</HeaderText>
            <div className={styles.grid}>
            <StyledTextDiv className={styles.container}>
                <p>Thanks for visiting! We hope that you have found what you needed on our website.
                    if not, please feel free to concact us on the methode below. </p>
            </StyledTextDiv>
        <StyledForm className={styles.containerTwo} onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="fullname">Full name:</label>
            <StyledInput {...register('fullName')} />
            <p className={styles.error}>{errors.fullName?.message}</p>
            <label htmlFor="subject">Subject:</label>
            <StyledInput {...register('subject')} />
            <p className={styles.error}>{errors.subject?.message}</p>
            <label htmlFor="email">Email:</label>
            <StyledInput {...register('email')} />
            <p className={styles.error}>{errors.email?.message}</p>
            <label htmlFor="body">Body:</label>
            <StyledInput {...register('body')} />
            <p className={styles.error}>{errors.body?.message}</p>
            <BaseButton type="submit">Contact us</BaseButton>
        </StyledForm>
        </div>
        </div>
    );
}

export default ContactForm;