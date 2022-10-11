--
-- PostgreSQL database cluster dump
--

-- Started on 2022-10-11 15:26:59

SET default_transaction_read_only = off;

SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;

--
-- Roles
--

CREATE ROLE postgres;
ALTER ROLE postgres WITH SUPERUSER INHERIT CREATEROLE CREATEDB LOGIN REPLICATION BYPASSRLS PASSWORD 'SCRAM-SHA-256$4096:+lmTj3z0tJ86D3tIzMabkg==$FajMh5QkwMe3TU3hGAEKPunm3m00udLKe/fZ/Hx+qyg=:xgRoQX+eMnO3poUhv3lfuHO93wXBBzHIzsyI9pHOc2I=';






--
-- Databases
--

--
-- Database "template1" dump
--

\connect template1

--
-- PostgreSQL database dump
--

-- Dumped from database version 14.3
-- Dumped by pg_dump version 14.3

-- Started on 2022-10-11 15:26:59

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

-- Completed on 2022-10-11 15:27:00

--
-- PostgreSQL database dump complete
--

--
-- Database "postgres" dump
--

\connect postgres

--
-- PostgreSQL database dump
--

-- Dumped from database version 14.3
-- Dumped by pg_dump version 14.3

-- Started on 2022-10-11 15:27:00

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 2 (class 3079 OID 16384)
-- Name: adminpack; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS adminpack WITH SCHEMA pg_catalog;


--
-- TOC entry 3347 (class 0 OID 0)
-- Dependencies: 2
-- Name: EXTENSION adminpack; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION adminpack IS 'administrative functions for PostgreSQL';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 213 (class 1259 OID 16406)
-- Name: companies; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.companies (
    company_id integer NOT NULL,
    company_name character varying(255),
    company_user_id integer,
    company_category character varying(255),
    company_address character varying(255),
    company_location character varying(255),
    company_phone character varying(255),
    company_headquarters character varying(255),
    company_billing_address character varying(255),
    company_registration_number character varying(255),
    company_vat_number character varying(255),
    company_archived boolean
);


ALTER TABLE public.companies OWNER TO postgres;

--
-- TOC entry 212 (class 1259 OID 16405)
-- Name: companies_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.companies ALTER COLUMN company_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.companies_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 214 (class 1259 OID 24586)
-- Name: documents; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.documents (
    document_id integer NOT NULL,
    document_name character varying(255),
    document_date character varying(255),
    document_user_id integer,
    document_company_id integer,
    document_title character varying(255)
);


ALTER TABLE public.documents OWNER TO postgres;

--
-- TOC entry 215 (class 1259 OID 24593)
-- Name: documents_document_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.documents ALTER COLUMN document_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.documents_document_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 216 (class 1259 OID 24606)
-- Name: haccp; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.haccp (
    haccp_id integer NOT NULL,
    haccp_unit_name character varying(255),
    haccp_company_location character varying(255),
    haccp_supply character varying(255),
    haccp_products_require_cold_storage character varying(255),
    haccp_require_keeping_warm boolean,
    haccp_preparatory character varying(255),
    haccp_storages character varying(255),
    haccp_refrigerator character varying(255),
    haccp_delivery boolean,
    haccp_delivery_method character varying(255),
    haccp_dressing_room boolean,
    haccp_cold_products boolean,
    haccp_egg character varying(255),
    haccp_glass_cleaner character varying(255),
    haccp_surface_disinfectant character varying(255),
    haccp_other_chemical character varying(255),
    haccp_hand_disinfectant character varying(255),
    haccp_2phase_dishwashing_detergent character varying(255),
    haccp_general_disinfectant character varying(255),
    haccp_scale_remover character varying(255),
    haccp_degreaser character varying(255),
    haccp_factory_dishwasher character varying,
    haccp_consumer_dishwasher character varying(255),
    haccp_disposable_consumer_container boolean,
    haccp_dish_washing_up character varying(255),
    haccp_have_haccp boolean,
    haccp_existing_haccp_date character varying(255),
    haccp_pest_control character varying(255),
    haccp_food_waste_transport character varying(255),
    haccp_municipal_waste_dispose character varying(255),
    haccp_entrances character varying(255),
    haccp_route_intersects boolean,
    haccp_place_of_receipt boolean,
    haccp_water_supply character varying(255),
    haccp_sewage_drain character varying(255),
    haccp_date character varying(255),
    haccp_user_id integer,
    haccp_company_id integer,
    haccp_require_keeping_cold boolean,
    haccp_ingredients character varying(255),
    haccp_company_category character varying,
    haccp_transaction_id character varying(255),
    payment_success boolean,
    haccp_user_email character varying(255),
    haccp_kitchen_location character varying(255),
    haccp_authority_signal character varying(255)
);


ALTER TABLE public.haccp OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 24623)
-- Name: haccp_haccp_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.haccp ALTER COLUMN haccp_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.haccp_haccp_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 210 (class 1259 OID 16399)
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    user_id integer NOT NULL,
    user_name character varying(255),
    user_email character varying(255),
    user_phone character varying(255),
    user_role character varying(255),
    user_password character varying(255),
    user_archived boolean
);


ALTER TABLE public.users OWNER TO postgres;

--
-- TOC entry 211 (class 1259 OID 16404)
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.users ALTER COLUMN user_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 3337 (class 0 OID 16406)
-- Dependencies: 213
-- Data for Name: companies; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.companies (company_id, company_name, company_user_id, company_category, company_address, company_location, company_phone, company_headquarters, company_billing_address, company_registration_number, company_vat_number, company_archived) OVERRIDING SYSTEM VALUE VALUES (81, 'Mollitia quia qui se', 6, 'BUFFET', NULL, 'Consequuntur in null', NULL, NULL, NULL, NULL, NULL, true);
INSERT INTO public.companies (company_id, company_name, company_user_id, company_category, company_address, company_location, company_phone, company_headquarters, company_billing_address, company_registration_number, company_vat_number, company_archived) OVERRIDING SYSTEM VALUE VALUES (82, 'Animi autem pariatu', 6, 'CASUALRESTAURANT', NULL, 'Minima provident fa', NULL, NULL, NULL, NULL, NULL, true);
INSERT INTO public.companies (company_id, company_name, company_user_id, company_category, company_address, company_location, company_phone, company_headquarters, company_billing_address, company_registration_number, company_vat_number, company_archived) OVERRIDING SYSTEM VALUE VALUES (83, 'Dolor irure voluptat', 6, 'CASUALRESTAURANT', NULL, 'Provident amet cup', NULL, NULL, NULL, NULL, NULL, true);
INSERT INTO public.companies (company_id, company_name, company_user_id, company_category, company_address, company_location, company_phone, company_headquarters, company_billing_address, company_registration_number, company_vat_number, company_archived) OVERRIDING SYSTEM VALUE VALUES (84, 'efwefef', 6, 'PUB', NULL, 'sefwfew', NULL, NULL, NULL, NULL, NULL, true);
INSERT INTO public.companies (company_id, company_name, company_user_id, company_category, company_address, company_location, company_phone, company_headquarters, company_billing_address, company_registration_number, company_vat_number, company_archived) OVERRIDING SYSTEM VALUE VALUES (8, 'Los Pollos Hermanos', 6, 'CASUALRESTAURANT', 'Los Pollos Hermanos', 'Aliquam nulla sint ', '06202222222', 'Animi recusandae E', 'Officiis repellendus', 'Reprehenderit paria', 'Optio ea et possimu', false);


--
-- TOC entry 3338 (class 0 OID 24586)
-- Dependencies: 214
-- Data for Name: documents; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.documents (document_id, document_name, document_date, document_user_id, document_company_id, document_title) OVERRIDING SYSTEM VALUE VALUES (1, 'talalasi_naplo', '2022.05.26.', 6, 8, 'Tálalási napló');
INSERT INTO public.documents (document_id, document_name, document_date, document_user_id, document_company_id, document_title) OVERRIDING SYSTEM VALUE VALUES (2, 'takaritasi_utasitas', '2022.05.27.', 6, 8, 'Takarítási utasítás');
INSERT INTO public.documents (document_id, document_name, document_date, document_user_id, document_company_id, document_title) OVERRIDING SYSTEM VALUE VALUES (8, 'allergen_tajekoztato', '2022.07.16', 6, 8, 'Allergén tájékoztató');
INSERT INTO public.documents (document_id, document_name, document_date, document_user_id, document_company_id, document_title) OVERRIDING SYSTEM VALUE VALUES (9, 'etelek_homersekletenek_ellenorzo_lapja', '2022.07.25.', 6, 8, 'Ételek hőmérsékletének ellenőrző lapja');
INSERT INTO public.documents (document_id, document_name, document_date, document_user_id, document_company_id, document_title) OVERRIDING SYSTEM VALUE VALUES (10, 'higieniai_es_takaritasi_utasitas', '2022.07.25.', 6, 8, 'Higiéniai és Takarítási Utasítás');
INSERT INTO public.documents (document_id, document_name, document_date, document_user_id, document_company_id, document_title) OVERRIDING SYSTEM VALUE VALUES (12, 'haccp_kezikonyv', '2022.07.25.', 6, 8, 'Haccp Kézikönyv');
INSERT INTO public.documents (document_id, document_name, document_date, document_user_id, document_company_id, document_title) OVERRIDING SYSTEM VALUE VALUES (13, 'jo_vendeglato_gyakorlat', '2022.08.18.', 6, 8, 'Jó vendéglátó gyakorlat');


--
-- TOC entry 3340 (class 0 OID 24606)
-- Dependencies: 216
-- Data for Name: haccp; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.haccp (haccp_id, haccp_unit_name, haccp_company_location, haccp_supply, haccp_products_require_cold_storage, haccp_require_keeping_warm, haccp_preparatory, haccp_storages, haccp_refrigerator, haccp_delivery, haccp_delivery_method, haccp_dressing_room, haccp_cold_products, haccp_egg, haccp_glass_cleaner, haccp_surface_disinfectant, haccp_other_chemical, haccp_hand_disinfectant, haccp_2phase_dishwashing_detergent, haccp_general_disinfectant, haccp_scale_remover, haccp_degreaser, haccp_factory_dishwasher, haccp_consumer_dishwasher, haccp_disposable_consumer_container, haccp_dish_washing_up, haccp_have_haccp, haccp_existing_haccp_date, haccp_pest_control, haccp_food_waste_transport, haccp_municipal_waste_dispose, haccp_entrances, haccp_route_intersects, haccp_place_of_receipt, haccp_water_supply, haccp_sewage_drain, haccp_date, haccp_user_id, haccp_company_id, haccp_require_keeping_cold, haccp_ingredients, haccp_company_category, haccp_transaction_id, payment_success, haccp_user_email, haccp_kitchen_location, haccp_authority_signal) OVERRIDING SYSTEM VALUE VALUES (155, 'Los Pollos Hermanos', 'Aliquam nulla sint ', 'Proident esse ulla', 'meat', true, 'egg', 'manual', 'egg', false, '', false, false, 'freshEgg', 'Eum rerum eum et rer', 'Sunt aperiam quasi c', 'Sapiente et dolorem ', 'Et consectetur aut f', 'Nulla consequatur M', 'Optio molestiae nos', 'Aut quis facere in a', 'Sunt laudantium eu', 'no', 'no', false, 'suplier', true, '2022-10-11T22:00:00.000Z', 'selfSolve', 'selfSolve', 'Vel quod similique i', 'service', true, true, 'tank', 'channel', '2022-10-11', 6, 8, true, 'drink', 'CASUALRESTAURANT', '502208167', true, 'admin2@test.com', 'Dolor quis adipisici', 'In est eveniet aut ');
INSERT INTO public.haccp (haccp_id, haccp_unit_name, haccp_company_location, haccp_supply, haccp_products_require_cold_storage, haccp_require_keeping_warm, haccp_preparatory, haccp_storages, haccp_refrigerator, haccp_delivery, haccp_delivery_method, haccp_dressing_room, haccp_cold_products, haccp_egg, haccp_glass_cleaner, haccp_surface_disinfectant, haccp_other_chemical, haccp_hand_disinfectant, haccp_2phase_dishwashing_detergent, haccp_general_disinfectant, haccp_scale_remover, haccp_degreaser, haccp_factory_dishwasher, haccp_consumer_dishwasher, haccp_disposable_consumer_container, haccp_dish_washing_up, haccp_have_haccp, haccp_existing_haccp_date, haccp_pest_control, haccp_food_waste_transport, haccp_municipal_waste_dispose, haccp_entrances, haccp_route_intersects, haccp_place_of_receipt, haccp_water_supply, haccp_sewage_drain, haccp_date, haccp_user_id, haccp_company_id, haccp_require_keeping_cold, haccp_ingredients, haccp_company_category, haccp_transaction_id, payment_success, haccp_user_email, haccp_kitchen_location, haccp_authority_signal) OVERRIDING SYSTEM VALUE VALUES (156, 'Eaque fuga In moles', 'Aut officia repellen', 'Exercitation cumque ', '', true, 'egg', 'dryProduct', 'iceCream###meat', false, '', true, true, 'disinfectedEgg', 'Sunt excepturi nihil', 'Aperiam non optio n', 'Voluptas ipsum iure', 'Molestiae quisquam e', 'Corporis explicabo ', 'Sed minima perspicia', 'Officia vitae id fug', 'Aut voluptatem dese', 'no', 'yes', true, 'disposable', true, '2022-10-11T22:00:00.000Z', 'selfSolve', 'expert', 'Et soluta et cillum ', 'service', false, false, 'mains', 'channel', '2022-10-11', NULL, NULL, false, 'drink', 'BUFFET', '9710d9c4-3cac-4d4b-9b99-7f4e2bb30bd0', false, 'suxed@mailinator.com', NULL, NULL);
INSERT INTO public.haccp (haccp_id, haccp_unit_name, haccp_company_location, haccp_supply, haccp_products_require_cold_storage, haccp_require_keeping_warm, haccp_preparatory, haccp_storages, haccp_refrigerator, haccp_delivery, haccp_delivery_method, haccp_dressing_room, haccp_cold_products, haccp_egg, haccp_glass_cleaner, haccp_surface_disinfectant, haccp_other_chemical, haccp_hand_disinfectant, haccp_2phase_dishwashing_detergent, haccp_general_disinfectant, haccp_scale_remover, haccp_degreaser, haccp_factory_dishwasher, haccp_consumer_dishwasher, haccp_disposable_consumer_container, haccp_dish_washing_up, haccp_have_haccp, haccp_existing_haccp_date, haccp_pest_control, haccp_food_waste_transport, haccp_municipal_waste_dispose, haccp_entrances, haccp_route_intersects, haccp_place_of_receipt, haccp_water_supply, haccp_sewage_drain, haccp_date, haccp_user_id, haccp_company_id, haccp_require_keeping_cold, haccp_ingredients, haccp_company_category, haccp_transaction_id, payment_success, haccp_user_email, haccp_kitchen_location, haccp_authority_signal) OVERRIDING SYSTEM VALUE VALUES (157, 'Est obcaecati et ut ', 'At dolore molestiae ', 'Aut et est odio sit ', '', true, 'meat', 'dryProduct', 'meat', true, 'motor', false, true, 'freshEgg', 'Quas architecto sit ', 'Et esse vel vel qui', 'Dolorem corrupti te', 'Est ducimus Nam do', 'Ratione cum occaecat', 'Placeat neque adipi', 'Aliquam amet illum', 'Consequatur beatae ', 'dishwasher', 'no', true, 'consumer', true, '2022-10-22T22:00:00.000Z', 'expert', 'selfSolve', 'Praesentium deserunt', 'service', true, false, 'mains', 'tank', '2022-10-11', NULL, NULL, false, 'can', 'BUFFET', '6cdd4a4a-8f42-489b-af33-5f8a41cf7751', false, 'cykudoz@mailinator.com', NULL, NULL);
INSERT INTO public.haccp (haccp_id, haccp_unit_name, haccp_company_location, haccp_supply, haccp_products_require_cold_storage, haccp_require_keeping_warm, haccp_preparatory, haccp_storages, haccp_refrigerator, haccp_delivery, haccp_delivery_method, haccp_dressing_room, haccp_cold_products, haccp_egg, haccp_glass_cleaner, haccp_surface_disinfectant, haccp_other_chemical, haccp_hand_disinfectant, haccp_2phase_dishwashing_detergent, haccp_general_disinfectant, haccp_scale_remover, haccp_degreaser, haccp_factory_dishwasher, haccp_consumer_dishwasher, haccp_disposable_consumer_container, haccp_dish_washing_up, haccp_have_haccp, haccp_existing_haccp_date, haccp_pest_control, haccp_food_waste_transport, haccp_municipal_waste_dispose, haccp_entrances, haccp_route_intersects, haccp_place_of_receipt, haccp_water_supply, haccp_sewage_drain, haccp_date, haccp_user_id, haccp_company_id, haccp_require_keeping_cold, haccp_ingredients, haccp_company_category, haccp_transaction_id, payment_success, haccp_user_email, haccp_kitchen_location, haccp_authority_signal) OVERRIDING SYSTEM VALUE VALUES (158, 'Ut non iure eu qui q', 'Ex non sed ut explic', 'Eu fugiat id cupid', '', true, 'egg', 'package', 'fish', true, 'car', true, false, 'powderedEgg', 'Proident ex id rer', 'Quo quis ea facilis ', 'Pariatur Incidunt ', 'Voluptates et simili', 'Soluta enim nulla a ', 'Illo accusamus est e', 'Sed eaque qui porro ', 'Tempore nihil moles', 'yes', 'no', true, 'suplier', false, '', 'expert', 'expert', 'Tempore quo culpa e', 'service', false, true, 'mains', 'tank', '2022-10-11', NULL, NULL, false, 'egg', 'CASUALRESTAURANT', '502208339', true, 'mapijafy@mailinator.com', 'Ab tempora et ut aut', 'Nulla consequuntur s');


--
-- TOC entry 3334 (class 0 OID 16399)
-- Dependencies: 210
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.users (user_id, user_name, user_email, user_phone, user_role, user_password, user_archived) OVERRIDING SYSTEM VALUE VALUES (5, 'Teszt User', 'test@test.com', '06202225577', 'USER', '$2b$10$Zb6HOAxHuMdHC.i9w.2lQeDM/39vUlfxe/BxPAtT1rI819f43bGpe', false);
INSERT INTO public.users (user_id, user_name, user_email, user_phone, user_role, user_password, user_archived) OVERRIDING SYSTEM VALUE VALUES (7, 'Kiss Géza', 'geza@test.com', '06202224355', 'USER', '$2b$10$Zb6HOAxHuMdHC.i9w.2lQeDM/39vUlfxe/BxPAtT1rI819f43bGpe', true);
INSERT INTO public.users (user_id, user_name, user_email, user_phone, user_role, user_password, user_archived) OVERRIDING SYSTEM VALUE VALUES (6, 'Admin', 'admin2@test.com', '06303334450', 'ADMIN', '$2b$10$XoZGGjMSNMa8sSTukgFRQu5VeGX627lQodqjD5azqMabMZ225ylGG', false);
INSERT INTO public.users (user_id, user_name, user_email, user_phone, user_role, user_password, user_archived) OVERRIDING SYSTEM VALUE VALUES (9, 'TesztUser', 'testuser@test.com', '06501034455', 'USER', '$2b$10$f5Rdl5Cv5VXeio6orFYQYeRQGPB6fhEMEn0f3JuW.C8nsNY6OcMOa', false);


--
-- TOC entry 3348 (class 0 OID 0)
-- Dependencies: 212
-- Name: companies_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.companies_id_seq', 84, true);


--
-- TOC entry 3349 (class 0 OID 0)
-- Dependencies: 215
-- Name: documents_document_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.documents_document_id_seq', 13, true);


--
-- TOC entry 3350 (class 0 OID 0)
-- Dependencies: 217
-- Name: haccp_haccp_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.haccp_haccp_id_seq', 158, true);


--
-- TOC entry 3351 (class 0 OID 0)
-- Dependencies: 211
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 22, true);


--
-- TOC entry 3185 (class 2606 OID 16410)
-- Name: companies companies_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.companies
    ADD CONSTRAINT companies_pkey PRIMARY KEY (company_id);


--
-- TOC entry 3187 (class 2606 OID 24592)
-- Name: documents documents_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.documents
    ADD CONSTRAINT documents_pkey PRIMARY KEY (document_id);


--
-- TOC entry 3189 (class 2606 OID 24612)
-- Name: haccp haccp_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.haccp
    ADD CONSTRAINT haccp_pkey PRIMARY KEY (haccp_id);


--
-- TOC entry 3181 (class 2606 OID 24605)
-- Name: users user_email; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT user_email UNIQUE (user_email);


--
-- TOC entry 3183 (class 2606 OID 16403)
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (user_id);


--
-- TOC entry 3192 (class 2606 OID 24599)
-- Name: documents company_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.documents
    ADD CONSTRAINT company_fk FOREIGN KEY (document_company_id) REFERENCES public.companies(company_id) NOT VALID;


--
-- TOC entry 3194 (class 2606 OID 24618)
-- Name: haccp haccp_company_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.haccp
    ADD CONSTRAINT haccp_company_id FOREIGN KEY (haccp_company_id) REFERENCES public.companies(company_id) NOT VALID;


--
-- TOC entry 3193 (class 2606 OID 24613)
-- Name: haccp haccp_user_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.haccp
    ADD CONSTRAINT haccp_user_id FOREIGN KEY (haccp_user_id) REFERENCES public.users(user_id) NOT VALID;


--
-- TOC entry 3190 (class 2606 OID 16411)
-- Name: companies user_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.companies
    ADD CONSTRAINT user_fk FOREIGN KEY (company_user_id) REFERENCES public.users(user_id) NOT VALID;


--
-- TOC entry 3191 (class 2606 OID 24594)
-- Name: documents user_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.documents
    ADD CONSTRAINT user_fk FOREIGN KEY (document_user_id) REFERENCES public.users(user_id) NOT VALID;


-- Completed on 2022-10-11 15:27:00

--
-- PostgreSQL database dump complete
--

-- Completed on 2022-10-11 15:27:00

--
-- PostgreSQL database cluster dump complete
--

